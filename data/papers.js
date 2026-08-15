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
  },
  {
    "id": "asquith-mast-reed-2019-supply-shock-versus-demand-shock",
    "title": "Supply Shock Versus Demand Shock: The Local Effects of New Housing in Low-Income Areas",
    "authors": ["Brian J. Asquith", "Evan Mast", "Davin Reed"],
    "affiliations": [],
    "published": "2019-12",
    "published_basis": "Working paper date",
    "venue": "Upjohn Institute Working Paper 19-316. Published in The Review of Economics and Statistics, Volume 105, Issue 2, pages 359-375",
    "kind": "Working paper",
    "access": "Free download",
    "categories": [
      "Housing Supply and Production",
      "Rents, Prices, and Affordability",
      "Filtering and Moving Chains"
    ],
    "key_point": "New buildings decrease nearby rents by 5 to 7 percent relative to locations slightly farther away or developed later, and they increase in-migration from low-income areas. Results are driven by a large supply effect—we show that new buildings absorb many high-income households—that overwhelms any offsetting endogenous amenity effect. The latter may be small because most new buildings go into already-changing areas. Contrary to common concerns, new buildings slow local rent increases rather than initiate or accelerate them.",
    "key_point_source": "Abstract",
    "abstract": "We study the local effects of new market-rate housing in low-income areas using microdata on large apartment buildings, rents, and migration. New buildings decrease nearby rents by 5 to 7 percent relative to locations slightly farther away or developed later, and they increase in-migration from low-income areas. Results are driven by a large supply effect—we show that new buildings absorb many high-income households—that overwhelms any offsetting endogenous amenity effect. The latter may be small because most new buildings go into already-changing areas. Contrary to common concerns, new buildings slow local rent increases rather than initiate or accelerate them.",
    "keywords": ["housing supply", "market-rate housing", "rents", "migration", "gentrification"],
    "doi": "10.1162/rest_a_01055",
    "url": "https://research.upjohn.org/up_workingpapers/316/",
    "added": "2026-08-09"
  },
  {
    "id": "mast-2019-new-market-rate-construction-low-income-market",
    "title": "The Effect of New Market-Rate Housing Construction on the Low-Income Housing Market",
    "authors": ["Evan Mast"],
    "affiliations": ["W.E. Upjohn Institute for Employment Research"],
    "published": "2019-07",
    "published_basis": "Working paper date",
    "venue": "Upjohn Institute Working Paper 19-307. Published in Journal of Urban Economics, Volume 133, article 103383",
    "kind": "Working paper",
    "access": "Free download",
    "categories": [
      "Filtering and Moving Chains",
      "Housing Supply and Production",
      "Rents, Prices, and Affordability"
    ],
    "key_point": "Next, I combine the address histories with a simulation model to estimate that building 100 new market-rate units leads 45-70 and 17-39 people to move out of below-median and bottom-quintile income tracts, respectively, with almost all of the effect occurring within five years. This suggests that new construction reduces demand and loosens the housing market in low- and middle-income areas, even in the short run.",
    "key_point_source": "Abstract",
    "abstract": "Increasing supply is frequently proposed as a solution to rising housing costs. However, there is little evidence on how new market-rate construction—which is typically expensive—affects the market for lower quality housing in the short run. I begin by using address history data to identify 52,000 residents of new multifamily buildings in large cities, their previous address, the current residents of those addresses, and so on. This sequence quickly adds lower-income neighborhoods, suggesting that strong migratory connections link the low-income market to new construction. Next, I combine the address histories with a simulation model to estimate that building 100 new market-rate units leads 45-70 and 17-39 people to move out of below-median and bottom-quintile income tracts, respectively, with almost all of the effect occurring within five years. This suggests that new construction reduces demand and loosens the housing market in low- and middle-income areas, even in the short run.",
    "keywords": ["migration chains", "vacancy chains", "market-rate housing", "filtering", "address histories"],
    "doi": "10.1016/j.jue.2021.103383",
    "url": "https://research.upjohn.org/up_workingpapers/307/",
    "added": "2026-08-09"
  },
  {
    "id": "li-2021-new-housing-units-in-your-backyard",
    "title": "Do new housing units in your backyard raise your rents?",
    "authors": ["Xiaodi Li"],
    "affiliations": [],
    "published": "2021-09",
    "published_basis": "Published online",
    "venue": "Journal of Economic Geography, Volume 22, Issue 6 (2022), pages 1309-1352",
    "kind": "Peer reviewed article",
    "access": "Subscription",
    "categories": [
      "Housing Supply and Production",
      "Rents, Prices, and Affordability"
    ],
    "key_point": "I provide event study evidence that within 500 ft, for every 10% increase in the housing stock, rents decrease by 1%; and for every 10% increase in the condo stock, condo sales prices decrease by 0.9%. In addition, I show that new high-rises attract new restaurants, which is consistent with the hypothesis about amenity effects. However, I find that the supply effect dominates the amenity effect, causing net reductions in the rents and sales prices of nearby residential properties.",
    "key_point_source": "Abstract",
    "abstract": "There is a growing debate about whether new housing units increase rents for immediately surrounding apartments. Some argue new market-rate development produces a supply effect, which should alleviate the demand pressure on existing housing units and decrease their rents. Others contend that new development will attract high-income households and new amenities, generating an amenity effect and driving up rents. I contribute to this debate by estimating the impact of new high-rises on nearby residential rents, residential property sales prices and restaurant openings in New York City. To address the selection bias that developers are more likely to build new high-rises in fast-appreciating areas, I restrict the sample to residential properties near approved new high-rises and exploit the plausibly exogenous timing of completion conditional upon the timing of approval. I provide event study evidence that within 500 ft, for every 10% increase in the housing stock, rents decrease by 1%; and for every 10% increase in the condo stock, condo sales prices decrease by 0.9%. In addition, I show that new high-rises attract new restaurants, which is consistent with the hypothesis about amenity effects. However, I find that the supply effect dominates the amenity effect, causing net reductions in the rents and sales prices of nearby residential properties.",
    "keywords": ["New York City", "high-rises", "supply effect", "amenity effect", "event study", "restaurants"],
    "doi": "10.1093/jeg/lbab034",
    "url": "https://academic.oup.com/joeg/article-abstract/22/6/1309/6362685",
    "added": "2026-08-09"
  },
  {
    "id": "guerrieri-hartley-hurst-2013-endogenous-gentrification",
    "title": "Endogenous gentrification and housing price dynamics",
    "authors": ["Veronica Guerrieri", "Daniel Hartley", "Erik Hurst"],
    "affiliations": [],
    "published": "2013-04",
    "published_basis": "Journal issue",
    "venue": "Journal of Public Economics, Volume 100 (2013), pages 45-60",
    "kind": "Peer reviewed article",
    "access": "Subscription",
    "categories": [
      "Segregation and Neighborhood Inequality",
      "Rents, Prices, and Affordability",
      "Homelessness and Displacement"
    ],
    "key_point": "In response to a city-wide demand shock, higher income residents will choose to expand their housing by migrating into the poorer neighborhoods that directly abut the initial richer neighborhoods. The in-migration of the richer residents into these border neighborhoods will bid up prices in those neighborhoods causing the original poorer residents to migrate out. We refer to this process as \"endogenous gentrification\". Using a variety of data sets and using Bartik variation across cities to identify city level housing demand shocks, we find strong empirical support for the model's predictions.",
    "key_point_source": "Abstract",
    "abstract": "In this paper, we begin by documenting substantial variation in house price growth across neighborhoods within a city during city-wide housing price booms. We then present a model which links house price movements across neighborhoods within a city and the gentrification of those neighborhoods in response to a city wide housing demand shock. A key ingredient in our model is a positive neighborhood externality: individuals like to live next to richer neighbors. This generates an equilibrium where households segregate based upon their income. In response to a city-wide demand shock, higher income residents will choose to expand their housing by migrating into the poorer neighborhoods that directly abut the initial richer neighborhoods. The in-migration of the richer residents into these border neighborhoods will bid up prices in those neighborhoods causing the original poorer residents to migrate out. We refer to this process as \"endogenous gentrification\". Using a variety of data sets and using Bartik variation across cities to identify city level housing demand shocks, we find strong empirical support for the model's predictions.",
    "keywords": ["gentrification", "neighborhood externality", "house price growth", "Bartik", "income segregation"],
    "doi": "10.1016/j.jpubeco.2013.02.001",
    "url": "https://doi.org/10.1016/j.jpubeco.2013.02.001",
    "added": "2026-08-09"
  },
  {
    "id": "phillips-manville-lens-2021-research-roundup-market-rate",
    "title": "Research Roundup: The Effect of Market-Rate Development on Neighborhood Rents",
    "authors": ["Shane Phillips", "Michael Manville", "Michael Lens"],
    "affiliations": ["UCLA Lewis Center for Regional Policy Studies"],
    "published": "2021-02",
    "published_basis": "Publication date",
    "venue": "UCLA Lewis Center for Regional Policy Studies, report",
    "kind": "Report",
    "access": "Free",
    "categories": [
      "Housing Supply and Production",
      "Rents, Prices, and Affordability"
    ],
    "key_point": "On one side are those who think new market-rate units — unsubsidized homes whose price often places them beyond the reach of lower- and middle-income households — make nearby housing more affordable by increasing availability and relieving pressure on the existing housing stock. This is known as the “supply effect.” An opposing view, however, is that new housing only attracts more wealthy households, brings new amenities to the neighborhood (including the housing itself), and sends a signal to existing landlords that they should raise their rents. This “amenity effect” or “demand effect” thus makes housing less affordable. [...] This publication reviews recent research publications that have looked into the neighborhood-level impacts of market-rate housing.",
    "key_point_source": "Report page",
    "source_text": "There’s a growing debate among housing advocates over the neighborhood-level impacts of market-rate housing development. On one side are those who think new market-rate units — unsubsidized homes whose price often places them beyond the reach of lower- and middle-income households — make nearby housing more affordable by increasing availability and relieving pressure on the existing housing stock. This is known as the “supply effect.” An opposing view, however, is that new housing only attracts more wealthy households, brings new amenities to the neighborhood (including the housing itself), and sends a signal to existing landlords that they should raise their rents. This “amenity effect” or “demand effect” thus makes housing less affordable. This publication reviews recent research publications that have looked into the neighborhood-level impacts of market-rate housing.",
    "keywords": ["literature review", "supply effect", "amenity effect", "neighborhood rents", "market-rate development"],
    "url": "https://www.lewis.ucla.edu/research/market-rate-development-impacts",
    "added": "2026-08-09"
  },
  {
    "id": "diamond-mcquade-qian-2019-rent-control-san-francisco",
    "title": "The Effects of Rent Control Expansion on Tenants, Landlords, and Inequality: Evidence from San Francisco",
    "authors": ["Rebecca Diamond", "Tim McQuade", "Franklin Qian"],
    "affiliations": [],
    "published": "2019-09",
    "published_basis": "Journal issue",
    "venue": "American Economic Review, Volume 109, Issue 9 (2019), pages 3365-3394",
    "kind": "Peer reviewed article",
    "access": "Free",
    "categories": [
      "Rent Regulation and Tenant Protections",
      "Rents, Prices, and Affordability",
      "Homelessness and Displacement"
    ],
    "key_point": "Leveraging new data tracking individuals' migration, we find rent control limits renters' mobility by 20 percent and lowers displacement from San Francisco. Landlords treated by rent control reduce rental housing supplies by 15 percent by selling to owner-occupants and redeveloping buildings. Thus, while rent control prevents displacement of incumbent renters in the short run, the lost rental housing supply likely drove up market rents in the long run, ultimately undermining the goals of the law.",
    "key_point_source": "Abstract",
    "abstract": "Using a 1994 law change, we exploit quasi-experimental variation in the assignment of rent control in San Francisco to study its impacts on tenants and landlords. Leveraging new data tracking individuals' migration, we find rent control limits renters' mobility by 20 percent and lowers displacement from San Francisco. Landlords treated by rent control reduce rental housing supplies by 15 percent by selling to owner-occupants and redeveloping buildings. Thus, while rent control prevents displacement of incumbent renters in the short run, the lost rental housing supply likely drove up market rents in the long run, ultimately undermining the goals of the law.",
    "keywords": ["rent control", "rent stabilization", "San Francisco", "tenant mobility", "displacement", "Costa-Hawkins"],
    "doi": "10.1257/aer.20181289",
    "url": "https://www.aeaweb.org/articles?id=10.1257/aer.20181289",
    "added": "2026-08-09"
  },
  {
    "id": "liu-mcmanus-yannopoulos-2020-housing-filtering-rates",
    "title": "Geographic and Temporal Variation in Housing Filtering Rates",
    "authors": ["Liyi Liu", "Douglas A. McManus", "Elias Yannopoulos"],
    "affiliations": ["Federal Home Loan Mortgage Corporation", "Retired", "Federal Home Loan Mortgage Corporation"],
    "published": "2020-02",
    "published_basis": "Posted to SSRN",
    "venue": "Working paper",
    "kind": "Working paper",
    "access": "Free download",
    "categories": [
      "Filtering and Moving Chains",
      "Rents, Prices, and Affordability",
      "Methods and Data"
    ],
    "key_point": "While filtering is an important long-term source of lower-income housing at the national level, this research shows that filtering rates for owner-occupied properties vary considerably both across and within metropolitan statistical areas. Notably, in some markets, properties “filter up” to higher-income households. This paper contributes to our understanding of filtering by demonstrating the geographic and temporal heterogeneity of filtering rates and examining links between filtering, supply elasticity, and gentrification.",
    "key_point_source": "Abstract",
    "abstract": "In the field of Housing Economics, filtering is the process by which properties, as they age and depreciate in quality, tend to be occupied by lower-income households. This is the primary mechanism by which competitive markets supply low-income housing. While filtering is an important long-term source of lower-income housing at the national level, this research shows that filtering rates for owner-occupied properties vary considerably both across and within metropolitan statistical areas. Notably, in some markets, properties “filter up” to higher-income households. This paper contributes to our understanding of filtering by demonstrating the geographic and temporal heterogeneity of filtering rates and examining links between filtering, supply elasticity, and gentrification. We also explore two alternative measures of filtering based on changes in relative income rather than real income.",
    "keywords": ["filtering", "affordable housing", "repeat income model", "supply elasticity", "gentrification"],
    "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3527800",
    "added": "2026-08-09"
  },
  {
    "id": "ucla-lewis-2021-rental-housing-registries",
    "title": "Opportunities and Obstacles for Rental Housing Registries",
    "authors": ["UCLA Lewis Center for Regional Policy Studies"],
    "affiliations": [],
    "published": "2021-01",
    "published_basis": "Event date",
    "venue": "UCLA Lewis Center for Regional Policy Studies, Housing, Equity, and Community Series",
    "kind": "Event",
    "access": "Free",
    "categories": [
      "Rent Regulation and Tenant Protections",
      "Methods and Data",
      "Local Political Economy"
    ],
    "key_point": "Rental housing registries require landlords to register and report basic information about their units, assisting with building inspections and enforcement of tenant protections. Roughly a dozen California cities already have rental housing registries, including Los Angeles, and the state legislature has considered establishing a statewide registry each of the past two years.",
    "key_point_source": "Event page",
    "source_text": "Rental housing registries require landlords to register and report basic information about their units, assisting with building inspections and enforcement of tenant protections. Roughly a dozen California cities already have rental housing registries, including Los Angeles, and the state legislature has considered establishing a statewide registry each of the past two years. On January 20th, join a slate of panelists including Assemblymember Buffy Wicks, author of the recent bills to expand registries statewide, to discuss the role of rental housing registries, obstacles to their adoption, and their potential to improve our understanding of the housing market and better protect California’s renter households. Panelists: Assembly member Buffy Wicks, California Assembly District 15. Catherine Bracy, Executive Director, TechEquity Collaborative.",
    "keywords": ["rental registry", "rental housing registry", "Buffy Wicks", "Catherine Bracy", "TechEquity Collaborative", "California", "tenant protections", "landlord reporting"],
    "url": "https://www.lewis.ucla.edu/event/opportunities-and-obstacles-for-rental-housing-registries",
    "added": "2026-08-09"
  },
  {
    "id": "kouchekinia-2026-inclusionary-zoning-and-housing-supply",
    "title": "Inclusionary Zoning and Housing Supply: Evidence from California’s Palmer Fix",
    "authors": ["Noah Kouchekinia"],
    "affiliations": ["University of California, Irvine, Department of Economics"],
    "published": "2026-06",
    "published_basis": "Date on the paper",
    "venue": "Working paper, University of California, Irvine",
    "kind": "Working paper",
    "access": "Free download",
    "categories": [
      "Zoning and Land Use Regulation",
      "Housing Supply and Production",
      "Subsidized and Affordable Housing"
    ],
    "key_point": "I find the typical inclusionary zoning ordinance reduces annual new residential construction by nearly a third (31.8%). Additionally, I find the policies relocate multi-family developments within jurisdictions to lower rent areas, where the policy is effectively less severe. Accounting for the stringency of policies turns out to be critical, and heterogeneous effects by policy stringency may explain divergent results in the prior literature. I estimate the cost of generating an affordable unit with inclusionary zoning to be approximately $800,000 in “excess rents” paid by market rate renters as a result of the policy’s constraint on supply. This exceeds the cost of directly incentivizing the creation of low-income housing in California through existing programs like LIHTC.",
    "key_point_source": "Abstract",
    "abstract": "Inclusionary Zoning requires developers to set aside a share of new units at affordable rates to low/moderate income tenants. In California, more than a third of localities have adopted an ordinance. Mandatory inclusionary zoning acts as a tax on construction and, all else equal, reduces the overall supply of housing. This potentially reduces affordability in the aggregate. Quantifying this trade off has been difficult due to heterogeneous local policies, data quality issues, and the endogeneity of local inclusionary zoning adoption. I estimate the effect of inclusionary zoning using novel administrative data covering all cities and counties in California. I leverage a statewide change in preempting law for identification, performing a difference-in-difference around an exogenous reactivation of local inclusionary ordinances. I find the typical inclusionary zoning ordinance reduces annual new residential construction by nearly a third (31.8%). Additionally, I find the policies relocate multi-family developments within jurisdictions to lower rent areas, where the policy is effectively less severe. Accounting for the stringency of policies turns out to be critical, and heterogeneous effects by policy stringency may explain divergent results in the prior literature. I estimate the cost of generating an affordable unit with inclusionary zoning to be approximately $800,000 in “excess rents” paid by market rate renters as a result of the policy’s constraint on supply. This exceeds the cost of directly incentivizing the creation of low-income housing in California through existing programs like LIHTC.",
    "transcription_note": "Read from the paper's own PDF. The title page sets the title on two lines with no punctuation between them, joined here with a colon. Four words the typesetting broke across lines have been closed up: ordinance, Quantifying, inclusionary, inclusionary. Nothing else was altered.",
    "keywords": ["Inclusionary Zoning", "Affordable Housing", "Spatial Sorting", "Location Choice", "Palmer", "LIHTC", "California", "inclusionary ordinance"],
    "url": "https://bpb-us-e2.wpmucdn.com/sites.uci.edu/dist/b/5302/files/2026/06/IZ_Kouchekinia.pdf",
    "added": "2026-08-15"
  },
  {
    "id": "freeman-lei-maaoui-2026-before-the-ground-breaks",
    "title": "Before the ground breaks: Is inclusionary zoning a shield or a signal of gentrification?",
    "authors": ["Lance Freeman", "Yining Lei", "Magda Maaoui"],
    "affiliations": [],
    "published": "2026-03",
    "published_basis": "Published online",
    "venue": "Land Use Policy, Volume 167 (2026), article 108033",
    "kind": "Peer reviewed article",
    "access": "Subscription",
    "categories": [
      "Zoning and Land Use Regulation",
      "Subsidized and Affordable Housing",
      "Rents, Prices, and Affordability"
    ],
    "key_point": "Based on a comparison of MIH zones to surrounding \"control\" areas, we find evidence of MIH increased both home sales prices and rents, but the most consistent and statistically significant growth occurred in areas immediately surrounding MIH zones. We find little evidence of price escalation in MIH zones. Our findings suggest that for IZs that are geographically limited like MIH, the costs to residents such as gentrification and increased housing prices may be externalized onto nearby neighborhoods. This points to a policy need for more spatially integrated planning approaches to affordable housing, where affordability protections extend beyond narrowly drawn IZ boundaries.",
    "key_point_source": "Abstract",
    "abstract": "Inclusionary Zoning (IZ) is a tool in land use planning for leveraging new market-rate housing to produce affordable housing, typically in exchange for increased density. While growing in popularity, IZ receives criticisms for the possibility that its market-rate housing component would lead to gentrification by altering local housing markets. Using New York City's Mandatory Inclusionary Housing (MIH) program, a relatively ambitious IZ effort, we test if IZ increases home sales prices and rents in areas that are designated as MIH zones. Based on a comparison of MIH zones to surrounding \"control\" areas, we find evidence of MIH increased both home sales prices and rents, but the most consistent and statistically significant growth occurred in areas immediately surrounding MIH zones. We find little evidence of price escalation in MIH zones. Our findings suggest that for IZs that are geographically limited like MIH, the costs to residents such as gentrification and increased housing prices may be externalized onto nearby neighborhoods. This points to a policy need for more spatially integrated planning approaches to affordable housing, where affordability protections extend beyond narrowly drawn IZ boundaries.",
    "transcription_note": "The publisher's own page would not open, so the abstract was read from the RePEc mirror of the publisher record rather than from the article page. The month shown is when the article went online, which Crossref records as 23 March 2026 and which matches a March license start date. The August 2026 date on the volume is the print issue and sits in the publication line. Author affiliations were left blank rather than guessed, because the only machine-readable source for them looked wrong.",
    "keywords": ["Inclusionary zoning", "Housing production", "Gentrification", "New York City", "Mandatory Inclusionary Housing", "MIH"],
    "doi": "10.1016/j.landusepol.2026.108033",
    "url": "https://www.sciencedirect.com/science/article/pii/S0264837726001171",
    "added": "2026-08-15"
  },
  {
    "id": "lee-mordechay-2025-metropolitan-zoning-asymmetries",
    "title": "Do Metropolitan Zoning Asymmetries Influence the Geography of Suburban Growth and Gentrification?",
    "authors": ["Hyojung Lee", "Kfir Mordechay"],
    "affiliations": [
      "Graduate School of Environmental Studies, Seoul National University",
      "Graduate School of Education and Psychology, Pepperdine University"
    ],
    "published": "2025-07",
    "published_basis": "Published online",
    "venue": "Land, Volume 14, Issue 8 (2025), article 1555",
    "kind": "Peer reviewed article",
    "access": "Open access",
    "categories": [
      "Zoning and Land Use Regulation",
      "Segregation and Neighborhood Inequality"
    ],
    "key_point": "Our findings show that suburban areas have outpaced urban cores in population growth across all zoning configurations, with the most pronounced growth occurring in metros where restrictive urban zoning coexists with permissive suburban regulation. This growth is disproportionately concentrated in affluent suburban neighborhoods, suggesting a spatial sorting of access to resources and amenities. We also find that urban–suburban gentrification gaps are the smallest in these asymmetrical zoning regimes, suggesting that permissive suburban land use may facilitate spillover effects from constrained cores. These findings suggest that zoning asymmetries shape not only the geography of growth but also the spatial dynamics of gentrification.",
    "key_point_source": "Abstract",
    "abstract": "Zoning policies play a critical role in shaping the geography of urban and suburban development in the United States. Using data from the National Zoning and Land-Use Database and tract-level census data from 42 Metropolitan Statistical Areas, we classify metros into four zoning regime types based on the relative restrictiveness of urban and suburban land-use policies and compare trends in population growth and neighborhood change across these regimes. Our findings show that suburban areas have outpaced urban cores in population growth across all zoning configurations, with the most pronounced growth occurring in metros where restrictive urban zoning coexists with permissive suburban regulation. This growth is disproportionately concentrated in affluent suburban neighborhoods, suggesting a spatial sorting of access to resources and amenities. We also find that urban–suburban gentrification gaps are the smallest in these asymmetrical zoning regimes, suggesting that permissive suburban land use may facilitate spillover effects from constrained cores. These findings suggest that zoning asymmetries shape not only the geography of growth but also the spatial dynamics of gentrification. We argue for a metropolitan perspective on land-use governance to better understand the interconnected nature of suburbanization and the spatial expansion of gentrification.",
    "keywords": ["land-use regulation", "zoning asymmetries", "suburban area", "gentrification", "population change", "National Zoning and Land-Use Database"],
    "doi": "10.3390/land14081555",
    "url": "https://www.mdpi.com/2073-445X/14/8/1555",
    "added": "2026-08-15"
  },
  {
    "id": "pew-2025-new-housing-slows-rent-growth-older-units",
    "title": "New Housing Slows Rent Growth Most for Older, More Affordable Units",
    "authors": ["Seva Rodnyansky", "Dennis Su", "Alex Horowitz"],
    "affiliations": ["The Pew Charitable Trusts"],
    "published": "2025-07",
    "published_basis": "Publication date",
    "venue": "The Pew Charitable Trusts, Housing Policy",
    "kind": "Article",
    "access": "Free",
    "categories": [
      "Filtering and Moving Chains",
      "Housing Supply and Production",
      "Rents, Prices, and Affordability"
    ],
    "key_point": "The nationwide housing shortage has driven rents up more in low-income neighborhoods than in the U.S. overall, but in areas that have recently added large amounts of housing, rents have fallen the most in lower-income neighborhoods with older buildings, according to an analysis of publicly available housing data. [...] Building more housing—both throughout a metropolitan area and in a particular neighborhood—keeps rent growth lower overall, but it takes the most pressure off of older, less-expensive housing, essentially mitigating the competitive process just described. Pew’s analysis of the 1,654 ZIP codes tracked by Zillow throughout U.S. metropolitan areas suggests that every 10% increase in a market’s housing supply (using American Community Survey data) from 2017 to 2023 correlated with rents growing 5% less from 2017 to 2024, controlling for a variety of factors.",
    "key_point_source": "Article",
    "source_text": "Data shows that limited supply is associated with greatest rent increases in low-income neighborhoods [...] The nationwide housing shortage has driven rents up more in low-income neighborhoods than in the U.S. overall, but in areas that have recently added large amounts of housing, rents have fallen the most in lower-income neighborhoods with older buildings, according to an analysis of publicly available housing data. [...] The findings suggest that not allowing more homes to be built—even for high-income residents—pushes up all rents, making it harder for low-income tenants to remain in their neighborhoods. [...] Building more housing—both throughout a metropolitan area and in a particular neighborhood—keeps rent growth lower overall, but it takes the most pressure off of older, less-expensive housing, essentially mitigating the competitive process just described. Pew’s analysis of the 1,654 ZIP codes tracked by Zillow throughout U.S. metropolitan areas suggests that every 10% increase in a market’s housing supply (using American Community Survey data) from 2017 to 2023 correlated with rents growing 5% less from 2017 to 2024, controlling for a variety of factors. New supply at the neighborhood-level matters, too. A 10% increase in a ZIP code’s housing supply means average rents grew by 1.4% less than they did in a ZIP code with no supply growth.",
    "transcription_note": "The article has no abstract, so source_text holds the passages that were read on the page rather than one continuous run. Passages that sit apart are separated with the same [...] mark used in the quotations.",
    "keywords": ["Zillow Observed Rent Index", "American Community Survey", "ZIP code", "rent growth", "housing shortage", "older housing", "low-income neighborhoods"],
    "url": "https://www.pew.org/en/research-and-analysis/articles/2025/07/31/new-housing-slows-rent-growth-most-for-older-more-affordable-units",
    "added": "2026-08-15"
  }
];
