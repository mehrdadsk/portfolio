# Actual Power BI feasibility KPI definitions (PBIP / DAX)

Extracted from the master PBIP TMDL files in the clean November 2026 EuroSpA repository. These are code expressions from the working semantic model, not hypothetical measures.

## Eligibility
Source: `.../definition/tables/ResearchCohorts.tmdl`

```dax
measure 'Eligible Treatments' = SUM(ResearchCohorts[EligibleTreatments])
measure 'Eligible Patients (single line and class)' = IF(HASONEVALUE(ResearchSliceDimensions[TreatmentLine]) && HASONEVALUE(ResearchSliceDimensions[DrugClass]) && HASONEVALUE(ResearchSliceDimensions[DrugName]),SUM(ResearchCohorts[EligiblePatients]),BLANK())
```

Multi-drug, multi-line and multi-class patient totals are deliberately not treated as additive distinct patients.

## Clinical outcome completeness and paired values
Source: `.../definition/tables/ResearchOutcomes.tmdl`

```dax
measure 'Clinical Measured Treatments' = IF(HASONEVALUE(ResearchOutcomes[Variable]) && HASONEVALUE(ResearchOutcomes[Timepoint]),SUM(ResearchOutcomes[ValidTreatments]),BLANK())
measure 'Clinical Completeness %' = IF(NOT(HASONEVALUE(ResearchOutcomes[Variable]) && HASONEVALUE(ResearchOutcomes[Timepoint])) || MAX(ResearchOutcomes[ColumnExists])=0,BLANK(),DIVIDE(SUM(ResearchOutcomes[ValidTreatments]),SUM(ResearchOutcomes[TotalTreatments])))
measure 'Clinical Completeness Status' = VAR v=[Clinical Completeness %] RETURN IF(ISBLANK(v),"Not assessable",IF(v<0.2,"Low",IF(v<=0.4,"Medium","Sufficient")))
measure 'Paired Completeness %' = IF(NOT(HASONEVALUE(ResearchOutcomes[Variable]) && HASONEVALUE(ResearchOutcomes[Timepoint])) || SELECTEDVALUE(ResearchOutcomes[Timepoint])="baseline" || MAX(ResearchOutcomes[ColumnExists])=0 || MAX(ResearchOutcomes[BaselineExists])=0,BLANK(),DIVIDE(SUM(ResearchOutcomes[PairedTreatments]),SUM(ResearchOutcomes[TotalTreatments])))
measure 'Paired Completeness Status' = VAR v=[Paired Completeness %] RETURN IF(ISBLANK(v),"Not assessable",IF(v<0.2,"Low",IF(v<=0.4,"Medium","Sufficient")))
measure 'Usable Country Count' = IF(NOT(HASONEVALUE(ResearchOutcomes[Variable]) && HASONEVALUE(ResearchOutcomes[Timepoint])),BLANK(),SUMX(VALUES(ResearchSliceDimensions[Country]),IF(CALCULATE([Clinical Measured Treatments])>0,1,0)))
measure 'Country Share of Usable Outcomes %' = IF(NOT(HASONEVALUE(ResearchOutcomes[Variable]) && HASONEVALUE(ResearchOutcomes[Timepoint])),BLANK(),DIVIDE([Clinical Measured Treatments],CALCULATE([Clinical Measured Treatments],ALLSELECTED(ResearchSliceDimensions[CountryLabel]))))
```

No extra `is_real_visit_6month` gate is applied when assessing a clinical variable's validity. A numeric zero is valid.

## Retention and maturity
Source: `.../definition/tables/ResearchRetention.tmdl`

```dax
measure 'Retention Adequacy %' = VAR h=SELECTEDVALUE(ResearchRetention[Months],12) RETURN IF(CALCULATE(MAX(ResearchRetention[RetentionSourceAvailable]),ResearchRetention[Months]=h)=0,BLANK(),DIVIDE(CALCULATE(SUM(ResearchRetention[AdequateTreatments]),ResearchRetention[Months]=h),CALCULATE(SUM(ResearchRetention[TotalTreatments]),ResearchRetention[Months]=h)))
measure 'Retention Adequate Treatments' = VAR h=SELECTEDVALUE(ResearchRetention[Months],12) RETURN CALCULATE(SUM(ResearchRetention[AdequateTreatments]),ResearchRetention[Months]=h)
measure 'Retention At Risk Treatments' = VAR h=SELECTEDVALUE(ResearchRetention[Months],12) RETURN CALCULATE(SUM(ResearchRetention[AtRiskTreatments]),ResearchRetention[Months]=h)
measure 'Retention Events by Month' = VAR h=SELECTEDVALUE(ResearchRetention[Months],12) RETURN CALCULATE(SUM(ResearchRetention[EventsByMonth]),ResearchRetention[Months]=h)
```

Retention adequacy at t means an eligible episode either has a documented discontinuation before t, or is known to be observed event-free through t. **Number at risk** counts event-free episodes observed at the horizon; it is not equal to the count of retention-adequate episodes. Neither is the Kaplan–Meier survival probability.

## Caveats

The formulas above must be evaluated under an appropriate cohort filter. A blank with all outcome slicers set to "All" is deliberate where a single variable/timepoint is needed. Data readiness labels do not replace study-specific sample-size and bias assessment.

The original PBIP is not embedded or publicly distributed on the portfolio project page.
