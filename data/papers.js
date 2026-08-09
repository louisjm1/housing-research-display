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
  },
  {
    "id": "fang-kim-tyndall-2025-downmarket-impact-honolulu",
    "title": "The Downmarket Impact of New Multifamily Housing: Evidence from a Honolulu Condo Tower",
    "authors": ["Limin Fang", "Emi Kim", "Justin Tyndall"],
    "affiliations": ["University of British Columbia", "Harvard University", "University of Hawaii at Manoa"],
    "published": "2025-11",
    "published_basis": "Posted to SSRN",
    "venue": "Real Estate Economics (2026)",
    "kind": "Peer reviewed article",
    "access": "Free download",
    "categories": [
      "Filtering and Moving Chains",
      "Housing Supply and Production",
      "Rents, Prices, and Affordability"
    ],
    "key_point": "The vacated homes were substantially cheaper than the new units and spanned diverse locations and housing types. Income-restricted units produced fewer secondary vacancies, but those vacancies were concentrated at lower price points. Our results show that new condominium construction eases supply constraints and expands affordability in a local housing market, and the contrast between market-rate and income-restricted units has important implications for inclusionary zoning policies.",
    "key_point_source": "Abstract",
    "abstract": "We test whether new condominium construction generates vacancies in a local housing market through induced moves. Using detailed address-history microdata, we track households who moved into a newly built 512-unit condominium tower in Honolulu, Hawai'i, which included both market-rate and income-restricted units. We identify prior addresses and follow vacancy chains across multiple rounds of moves. The vacated homes were substantially cheaper than the new units and spanned diverse locations and housing types. Income-restricted units produced fewer secondary vacancies, but those vacancies were concentrated at lower price points. Our results show that new condominium construction eases supply constraints and expands affordability in a local housing market, and the contrast between market-rate and income-restricted units has important implications for inclusionary zoning policies.",
    "keywords": ["Housing Supply", "Urban Development", "Land-Use Regulation", "Filtering"],
    "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5780364",
    "added": "2026-08-09"
  },
  {
    "id": "grabar-2026-high-end-construction-helps-everyone",
    "title": "High-End Construction Really Does Help Everyone",
    "authors": ["Henry Grabar"],
    "affiliations": [],
    "published": "2026-02",
    "published_basis": "Publication date",
    "venue": "The Atlantic, Ideas",
    "kind": "Magazine article",
    "access": "Subscription",
    "categories": [
      "Filtering and Moving Chains",
      "Housing Supply and Production",
      "Rents, Prices, and Affordability"
    ],
    "key_point": "A new rung at the top of the housing ladder permits people lower down to climb up.",
    "key_point_source": "Summary line",
    "source_text": "High-End Construction Really Does Help Everyone. A new rung at the top of the housing ladder permits people lower down to climb up.",
    "keywords": [],
    "url": "https://www.theatlantic.com/ideas/2026/02/housing-crisis-rich-poor-building/686086/",
    "added": "2026-08-09"
  },
  {
    "id": "pew-2026-moving-chains-of-affordability",
    "title": "Building More Housing Creates “Moving Chains” of Affordability",
    "authors": ["The Pew Charitable Trusts"],
    "affiliations": [],
    "published": "2026-05",
    "published_basis": "Publication date",
    "venue": "The Pew Charitable Trusts, Housing Policy",
    "kind": "Video",
    "access": "Free",
    "categories": [
      "Filtering and Moving Chains",
      "Housing Supply and Production",
      "Subsidized and Affordable Housing"
    ],
    "key_point": "Research conducted by Evan Mast, an assistant professor at the University of Notre Dame, shows that when a community builds new housing—including high-end apartments—it creates vacancies downstream, in lower- and middle-income neighborhoods, as people move to bigger or nicer (and often more expensive) homes. [...] By allowing more apartments to be built—even luxury apartments—D.C. created a moving chain that freed up at least five homes",
    "key_point_source": "Video page",
    "source_text": "Titi’s story illustrates the real-life consequences of the U.S. housing shortage—currently estimated at 4 million to 7 million homes—and how building more housing of any kind can help increase availability and improve affordability. How so? It’s called a moving chain. Research conducted by Evan Mast, an assistant professor at the University of Notre Dame, shows that when a community builds new housing—including high-end apartments—it creates vacancies downstream, in lower- and middle-income neighborhoods, as people move to bigger or nicer (and often more expensive) homes. Using this framework, The Pew Charitable Trusts found that Titi’s home in a dedicated low-income apartment building would not have been available if a luxury apartment building had not been built in downtown D.C. 10 years earlier. By allowing more apartments to be built—even luxury apartments—D.C. created a moving chain that freed up at least five homes—including Titi’s.",
    "keywords": ["Economic mobility", "Housing", "Local policy"],
    "url": "https://www.pew.org/en/research-and-analysis/video/2026/building-more-housing-creates-moving-chains-of-affordability",
    "added": "2026-08-09"
  },
  {
    "id": "rollet-2025-zoning-dynamics-urban-redevelopment",
    "title": "Zoning and the Dynamics of Urban Redevelopment",
    "also_titled": "Can We Rebuild a City? The Dynamics of Urban Redevelopment",
    "authors": ["Vincent Rollet"],
    "affiliations": ["Massachusetts Institute of Technology"],
    "published": "2025-04",
    "published_basis": "Posted to SSRN",
    "venue": "Working paper, Massachusetts Institute of Technology",
    "kind": "Working paper",
    "access": "Free download",
    "categories": [
      "Zoning and Land Use Regulation",
      "Housing Supply and Production",
      "Rents, Prices, and Affordability"
    ],
    "key_point": "While zoning strongly constrains city growth, the effects of relaxing regulation take decades to materialize and are limited in inexpensive or densely built areas. This is due to the large fixed costs of redevelopment, which rise sharply with the size of existing buildings and generate considerable persistence in city structure. Furthermore, due to migration spillovers, the affordability benefits of zoning reform largely accrue to households outside the rezoned neighborhoods.",
    "key_point_source": "Abstract",
    "abstract": "Cities increasingly grow through redevelopment—demolishing old buildings to make way for new ones. This paper studies this process and how it is influenced by zoning, which regulates the size and use of new buildings. I build a dynamic general equilibrium model of floorspace supply and demand, which I estimate using a newly constructed parcel-level panel of buildings and zoning in New York City. I validate the model using quasi-experimental variation from recent zoning reforms and apply it to evaluate the effect of relaxing regulation on construction and affordability. While zoning strongly constrains city growth, the effects of relaxing regulation take decades to materialize and are limited in inexpensive or densely built areas. This is due to the large fixed costs of redevelopment, which rise sharply with the size of existing buildings and generate considerable persistence in city structure. Furthermore, due to migration spillovers, the affordability benefits of zoning reform largely accrue to households outside the rezoned neighborhoods.",
    "keywords": ["zoning", "redevelopment", "historical persistence", "housing supply", "city structure"],
    "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5205801",
    "added": "2026-08-09"
  },
  {
    "id": "giacoletti-korevaar-qian-2025-housing-supply-expansions",
    "title": "How Housing Supply Expansions Reshape Cities",
    "authors": ["Marco Giacoletti", "Matthijs Korevaar", "Franklin Qian"],
    "affiliations": ["Mendoza College of Business", "Erasmus School of Economics", "UNC Kenan-Flagler Business School"],
    "published": "2025-12",
    "published_basis": "Posted to SSRN",
    "venue": "Working paper",
    "kind": "Working paper",
    "access": "Free download",
    "categories": [
      "Housing Supply and Production",
      "Rents, Prices, and Affordability",
      "Reform and Policy Evaluation"
    ],
    "key_point": "Using administrative microdata, we show that house prices in highly exposed neighborhoods fell by 2-3%, with declines concentrated in higher-income areas that competed most directly with the new housing. Vinex also drew higher-income households from nearby neighborhoods and increased local employment growth, especially in tradable services. [...] The model shows that local price comparisons understate the broader gains from large supply expansions: welfare rises for both worker groups, proportionally more for service workers, and remains positive after accounting for observed in-migration.",
    "key_point_source": "Abstract",
    "abstract": "We study the Vinex program, a large-scale relaxation of residential land supply constraints near major Dutch cities. Using administrative microdata, we show that house prices in highly exposed neighborhoods fell by 2-3%, with declines concentrated in higher-income areas that competed most directly with the new housing. Vinex also drew higher-income households from nearby neighborhoods and increased local employment growth, especially in tradable services. To interpret these patterns, we develop a quantitative spatial equilibrium model with income-dependent housing demand and a unified land market. The model shows that local price comparisons understate the broader gains from large supply expansions: welfare rises for both worker groups, proportionally more for service workers, and remains positive after accounting for observed in-migration.",
    "keywords": ["Housing Supply", "Land Use Regulation", "House Prices", "Housing Affordability", "Residential Mobility", "Local Labor Markets", "Spatial Equilibrium", "Netherlands"],
    "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5840244",
    "added": "2026-08-09"
  },
  {
    "id": "nyu-furman-center-2026-land-use-reform-tracker",
    "title": "Land Use Reform Tracker",
    "authors": ["NYU Furman Center"],
    "affiliations": [],
    "published": "2026-03",
    "published_basis": "Tool launched",
    "venue": "NYU Furman Center, data tool",
    "kind": "Data tool",
    "access": "Free",
    "categories": [
      "Reform and Policy Evaluation",
      "Zoning and Land Use Regulation",
      "Methods and Data"
    ],
    "key_point": "The Land Use Reform Tracker is a resource designed to provide researchers, state lawmakers, city officials, the media and others with a database they can use to gain a deeper understanding of how the land use policy landscape is changing nationally. The Tracker provides a database on enacted bills, including summaries of bill text, analysis of how the legislation compares to other states, and information on the different types of land use reforms.",
    "key_point_source": "Tool page",
    "source_text": "A national database of state land use reforms and analysis of how they are working. Mapping State Land Use Reforms. The Land Use Reform Tracker is a resource designed to provide researchers, state lawmakers, city officials, the media and others with a database they can use to gain a deeper understanding of how the land use policy landscape is changing nationally. The Tracker provides a database on enacted bills, including summaries of bill text, analysis of how the legislation compares to other states, and information on the different types of land use reforms. Additionally, it offers up-to-date collections of research and commentary about the legislation, information about how the reform is being implemented, and about litigation and other reactions to the reform. Track recent state statutes that reform land use, zoning and related housing policies across all 50 states.",
    "keywords": ["state land use reform", "zoning", "legislation tracking"],
    "url": "https://www.furmancenter.org/data-tool/land-use-reform-tracker/",
    "added": "2026-08-09"
  },
  {
    "id": "soltas-gruber-2026-cost-of-permitting",
    "title": "How Costly Is Permitting in Housing Development?",
    "authors": ["Evan Soltas", "Jonathan Gruber"],
    "affiliations": ["Princeton Economics and SPIA", "MIT Economics"],
    "published": "2026-02",
    "published_basis": "Date on the paper",
    "venue": "Working paper",
    "kind": "Working paper",
    "access": "Free download",
    "categories": [
      "Permitting and Approvals",
      "Housing Supply and Production",
      "Construction Costs and Labor"
    ],
    "key_point": "Using a repeat-listing difference-in-differences estimator, we find developers pay 50 percent more ($48 per square foot) for preapproved land. Comparing similar proposed developments, preapproval raises the probability of completing construction within four years of site acquisition by 10 percentage points (30 percent). Permitting can explain one third of the gap in Los Angeles between home prices and construction costs.",
    "key_point_source": "Abstract",
    "abstract": "Permitting costs are widely cited, but little analyzed, as a key burden on housing development in leading U.S. cities. We measure them using an implicit market for “ready-to-issue” permits in Los Angeles, where landowners can prepay permitting costs and sell preapproved land to developers at a premium. Using a repeat-listing difference-in-differences estimator, we find developers pay 50 percent more ($48 per square foot) for preapproved land. Comparing similar proposed developments, preapproval raises the probability of completing construction within four years of site acquisition by 10 percentage points (30 percent). Permitting can explain one third of the gap in Los Angeles between home prices and construction costs.",
    "keywords": ["building permit", "land-use regulation", "hedonic", "zoning", "capitalization"],
    "url": "https://evansoltas.com/papers/Permitting_SoltasGruber2026.pdf",
    "added": "2026-08-09"
  }
];
