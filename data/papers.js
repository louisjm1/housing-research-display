/* The research library.
   One entry per paper. Everything between the square brackets is strict JSON,
   so the checker can read it and confirm every quotation is exact.

   key_point holds wording taken straight from the paper. Where sentences that
   are not next to each other in the original have been joined, the gap is
   marked with [...]. Nothing inside a quotation is reworded.

   published is the month the thing we link to actually became available,
   written as YYYY-MM. published_basis records where that date comes from,
   because a journal issue year and an online release date often differ.

   related points at another entry by its id. Only the newer paper needs to
   declare the link. The page works out the other direction on its own. */

window.PAPERS = [
  {
    "id": "connolly-kazis-2026-rezoning-the-rust-belt",
    "title": "Rezoning The Rust Belt",
    "authors": ["Brian Connolly", "Noah Kazis"],
    "affiliations": ["University of Michigan at Ann Arbor", "University of Michigan Law School"],
    "published": "2026-03",
    "published_basis": "Posted to SSRN",
    "venue": "Washington University Law Review, Volume 104 (forthcoming 2027)",
    "kind": "Law review article",
    "access": "Free download",
    "categories": [
      "Zoning and Land Use Regulation",
      "Permitting and Approvals",
      "Legacy Cities and Weak Markets"
    ],
    "key_point": "In weaker markets, land-use regulations do not cause housing shortages, but they still impose frictions that seriously and unnecessarily encumber revitalization. [...] Zoning in Rust Belt cities cements a status quo of abandonment, preventing cost-effective building designs and, on many parcels, prohibiting new development outright. Discretionary relief is routinely necessary; however, in these markets, where profit margins are low, many beneficial projects cannot afford to comply with low-density zoning or secure a waiver. Outdated and understaffed building permitting systems-resulting from decades of fiscal distress-often pose greater barriers than zoning. [...] Zoning reform alone will not save the Rust Belt or other depopulated places, but it is nevertheless imperative for encouraging nascent revitalization efforts.",
    "key_point_source": "Abstract",
    "abstract": "Contemporary debates about land-use law treat restrictive zoning as a problem of expensive, high-demand markets. Economically stagnant or depopulated places are ignored, or assumed not to need regulatory reforms. These places' omission in this discourse is a mistake. In weaker markets, land-use regulations do not cause housing shortages, but they still impose frictions that seriously and unnecessarily encumber revitalization. This Article describes how land-use law impedes redevelopment, focusing on postindustrial Midwestern cities-especially Detroit, the paragon of decline. To do so, it pairs quantitative analyses of building permits, variances, and rezonings with development-project case studies and interviews of public and private-sector stakeholders across the region.\n\nZoning in Rust Belt cities cements a status quo of abandonment, preventing cost-effective building designs and, on many parcels, prohibiting new development outright. Discretionary relief is routinely necessary; however, in these markets, where profit margins are low, many beneficial projects cannot afford to comply with low-density zoning or secure a waiver. Outdated and understaffed building permitting systems-resulting from decades of fiscal distress-often pose greater barriers than zoning. Despite depopulated cities' desire for growth, the local political economy has perpetuated these counterproductive rules and systems. The dominance of large, repeat developers, a dealmaking economic-development culture, and a deep distrust of change-rooted in histories of racial segregation and the palpable threat of further decline-have left land-use law too discretionary. And cities have not fully confronted the associated costs of delay and uncertainty.\n\nBut change is now underway. This Article both collects recent reforms sweeping the region and suggests a policy approach tailored to these cities' contexts, ranging from proactive zoning changes to using pre-approved building plans and expanding administrative capacity. Zoning reform alone will not save the Rust Belt or other depopulated places, but it is nevertheless imperative for encouraging nascent revitalization efforts.",
    "keywords": ["land use law", "real estate law", "zoning", "urban revitalization", "real estate development", "urban redevelopment", "real estate", "urban planning", "Detroit", "Cleveland", "Buffalo", "Milwaukee", "St. Louis", "Cincinnati", "Indianapolis", "zoning reform", "housing", "exactions", "community development", "affordable housing"],
    "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6404960",
    "added": "2026-08-08"
  },
  {
    "id": "mleczko-2026-cumulative-exposure-exclusionary-zoning",
    "title": "The Cumulative Exposure to Exclusionary Zoning in Impoverished Neighborhoods",
    "authors": ["Matthew Mleczko"],
    "affiliations": [],
    "published": "2026-02",
    "published_basis": "Journal issue",
    "venue": "Demography, Volume 63, Issue 1 (2026), pages 213-239",
    "kind": "Peer reviewed article",
    "access": "Open access",
    "categories": [
      "Zoning and Land Use Regulation",
      "Rents, Prices, and Affordability",
      "Segregation and Neighborhood Inequality"
    ],
    "key_point": "I demonstrate that exclusionary zoning is strongly associated with neighborhood disadvantage in impoverished neighborhoods, much more than would be uncovered using fixed effects or other modeling approaches. Exclusionary zoning is associated with higher median rents and higher shares of rent-burdened households in impoverished communities. Higher rents may be generated by higher housing prices as well as by a shortage of housing available to below-median income households throughout a metro area. These results suggest that exclusionary zoning policies may not only contribute to concentrated advantage in affluent areas but also have spillover effects that have negative long-run consequences for disadvantaged neighboring communities.",
    "key_point_source": "Abstract",
    "abstract": "In this study, I carry out dynamic modeling strategies to estimate the cumulative associations between exclusionary zoning and material hardship in impoverished neighborhoods. To do so, I create the largest nationwide panel zoning database to date by combining the National Zoning and Land Use Database covering the years 2019‒2022 with prior zoning and land use data from 2003‒2006. Accounting for posttreatment bias—the bias generated by including time-varying confounders that are themselves affected by past treatments in a longitudinal model—with marginal structural models, I demonstrate that exclusionary zoning is strongly associated with neighborhood disadvantage in impoverished neighborhoods, much more than would be uncovered using fixed effects or other modeling approaches. Exclusionary zoning is associated with higher median rents and higher shares of rent-burdened households in impoverished communities. Higher rents may be generated by higher housing prices as well as by a shortage of housing available to below-median income households throughout a metro area. These results suggest that exclusionary zoning policies may not only contribute to concentrated advantage in affluent areas but also have spillover effects that have negative long-run consequences for disadvantaged neighboring communities.",
    "keywords": ["Zoning", "Land use", "Housing", "Poverty", "Marginal structural models"],
    "doi": "10.1215/00703370-12468457",
    "url": "https://read.dukeupress.edu/demography/article/63/1/213/407848/The-Cumulative-Exposure-to-Exclusionary-Zoning-in",
    "added": "2026-08-08"
  },
  {
    "id": "been-ellen-oregan-2019-supply-skepticism",
    "title": "Supply Skepticism: Housing Supply and Affordability",
    "authors": ["Vicki Been", "Ingrid Gould Ellen", "Katherine O’Regan"],
    "affiliations": [
      "New York University School of Law, NYU Furman Center",
      "NYU Wagner School, NYU Furman Center",
      "NYU Wagner School, NYU Furman Center"
    ],
    "published": "2018-12",
    "published_basis": "Published online",
    "venue": "Housing Policy Debate, Volume 29, Issue 1 (2019), pages 25-40",
    "kind": "Peer reviewed article",
    "access": "Subscription",
    "categories": [
      "Housing Supply and Production",
      "Rents, Prices, and Affordability",
      "Zoning and Land Use Regulation"
    ],
    "key_point": "We ultimately conclude, from both theory and empirical evidence, that adding new homes moderates price increases and therefore makes housing more affordable to low- and moderate-income families. We argue further that there are additional reasons to be concerned about inadequate supply response and assess the evidence on those effects of limiting supply, including preventing workers from moving to areas with growing job opportunities. Finally, we conclude by emphasizing that new market-rate housing is necessary but not sufficient. Government intervention is critical to ensure that supply is added at prices affordable to a range of incomes.",
    "key_point_source": "Abstract",
    "abstract": "Growing numbers of affordable housing advocates and community members are questioning the premise that increasing the supply of market-rate housing will result in housing that is more affordable. Economists and other experts who favor increases in supply have failed to take these supply skeptics seriously. But left unanswered, supply skepticism is likely to continue to feed local opposition to housing construction, and further increase the prevalence and intensity of land-use regulations that limit construction. This article is meant to bridge the divide, addressing each of the key arguments supply skeptics make and reviewing what research has shown about housing supply and its effect on affordability. We ultimately conclude, from both theory and empirical evidence, that adding new homes moderates price increases and therefore makes housing more affordable to low- and moderate-income families. We argue further that there are additional reasons to be concerned about inadequate supply response and assess the evidence on those effects of limiting supply, including preventing workers from moving to areas with growing job opportunities. Finally, we conclude by emphasizing that new market-rate housing is necessary but not sufficient. Government intervention is critical to ensure that supply is added at prices affordable to a range of incomes.",
    "keywords": ["Housing", "low-income housing", "land use/zoning", "construction/building", "development/revitalization", "markets", "prices", "regulation"],
    "doi": "10.1080/10511482.2018.1476899",
    "url": "https://www.tandfonline.com/doi/full/10.1080/10511482.2018.1476899",
    "added": "2026-08-08"
  },
  {
    "id": "been-ellen-oregan-2025-supply-skepticism-revisited",
    "title": "Supply Skepticism Revisited",
    "authors": ["Vicki Been", "Ingrid Gould Ellen", "Katherine O’Regan"],
    "affiliations": [
      "New York University School of Law, NYU Furman Center",
      "NYU Wagner School, NYU Furman Center",
      "NYU Wagner School, NYU Furman Center"
    ],
    "published": "2024-11",
    "published_basis": "Published online",
    "venue": "Housing Policy Debate, Volume 35, Issue 1 (2025), pages 96-113",
    "kind": "Peer reviewed article",
    "access": "Free access",
    "categories": [
      "Housing Supply and Production",
      "Rents, Prices, and Affordability",
      "Homelessness and Displacement"
    ],
    "key_point": "Although “supply skeptics” claim that new housing supply does not slow growth in rents, our review of rigorous recent studies finds that: (a) increases in housing supply reduce rents or slow the growth in rents in the region; (b) in some circumstances, new construction also reduces rents or rent growth in the surrounding neighborhood; (c) while new supply is associated with measures of gentrification, it has not been shown to heighten displacement of lower income households; and (d) the chains of moves resulting from new supply free up both for-sale and rented dwelling units that are then occupied by households across the income spectrum, and provide higher income households with alternatives to the older units for which they might otherwise outbid lower income residents.",
    "key_point_source": "Abstract",
    "abstract": "Although “supply skeptics” claim that new housing supply does not slow growth in rents, our review of rigorous recent studies finds that: (a) increases in housing supply reduce rents or slow the growth in rents in the region; (b) in some circumstances, new construction also reduces rents or rent growth in the surrounding neighborhood; (c) while new supply is associated with measures of gentrification, it has not been shown to heighten displacement of lower income households; and (d) the chains of moves resulting from new supply free up both for-sale and rented dwelling units that are then occupied by households across the income spectrum, and provide higher income households with alternatives to the older units for which they might otherwise outbid lower income residents.",
    "keywords": ["affordability", "land use/zoning", "gentrification", "rental housing", "multifamily", "construction/building"],
    "doi": "10.1080/10511482.2024.2418044",
    "url": "https://www.tandfonline.com/doi/full/10.1080/10511482.2024.2418044",
    "related": [
      { "id": "been-ellen-oregan-2019-supply-skepticism", "relation": "follows" }
    ],
    "added": "2026-08-08"
  }
];
