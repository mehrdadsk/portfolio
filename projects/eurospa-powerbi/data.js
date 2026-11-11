/* Public demo data derived from EuroSpA_PowerBI_Synthetic_Summaries_Updated.xlsx.
   These are synthetic aggregate values only; NO patient-level data is published.
   Each line array: [TNFi, IL-17i, Other] (other includes all remaining classes).
   Country labels intentionally preserve the source workbook codes, including SF.
*/
window.EUROSPA_SYNTHETIC = {
  year: 2026,
  total: {patients:2468, treatments:3637, visits:9524},
  registries: [
    ["CH","scqm",115,166,427],["DE","rabbitspa",124,198,537],
    ["DK","danbio",135,200,549],["EE","ersbtr",129,219,589],
    ["ES","biobadaser",165,246,647],["IS","icebio",163,231,599],
    ["IT","gisea",153,233,597],["NL","arc",196,294,775],
    ["NO","nordmard",176,252,644],["PL","polnorrheuma",147,205,518],
    ["PT","reuma.pt",123,185,489],["RO","rrbr",128,197,519],
    ["SE","srq",140,194,499],["SF","robfin",175,243,640],
    ["SI","biorx.si",107,155,427],["TR","turkbio",105,157,410],
    ["UK","bsrbsaspsa",187,262,658]
  ],
  lines: {
    CH:[[70,20,25],[20,7,9],[6,4,1],[2,0,2]],
    DE:[[85,19,20],[31,9,8],[13,5,2],[4,1,1]],
    DK:[[81,26,28],[18,10,13],[10,3,2],[5,4,0]],
    EE:[[73,27,29],[29,15,11],[13,3,8],[5,2,4]],
    ES:[[102,33,30],[31,11,19],[7,4,3],[2,2,2]],
    IS:[[97,31,35],[31,5,11],[7,6,3],[3,1,1]],
    IT:[[98,25,30],[35,11,16],[7,3,5],[1,0,2]],
    NL:[[114,38,44],[44,12,13],[13,5,2],[7,2,0]],
    NO:[[93,45,38],[28,10,16],[11,1,4],[5,1,0]],
    PL:[[80,30,37],[29,6,12],[6,2,1],[1,0,1]],
    PT:[[82,18,23],[24,10,6],[8,2,3],[4,2,3]],
    RO:[[70,32,26],[25,13,7],[9,2,6],[3,2,2]],
    SE:[[82,23,35],[20,10,8],[6,4,1],[3,0,2]],
    SF:[[115,25,35],[33,4,15],[7,3,4],[2,0,0]],
    SI:[[63,19,25],[22,5,6],[9,2,0],[4,0,0]],
    TR:[[57,20,28],[18,7,13],[7,2,2],[2,1,0]],
    UK:[[102,38,47],[31,13,14],[11,2,1],[1,1,1]]
  },
  lineLabels:["First line","Second line","Third line","Fourth line+"],
  classes:["TNFi","IL-17i","Other targeted therapies"]
};
