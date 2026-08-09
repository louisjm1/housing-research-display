/* Important court cases.
   Everything between the square brackets is strict JSON, so the checker can
   read it and confirm every quoted holding is exact.

   finding holds wording taken straight from the court. Where passages that are
   not next to each other in the original have been joined, the gap is marked
   with [...]. Nothing inside a quotation is reworded.

   source_text is the passage that was actually read at the link below, and it
   is what the checker measures the quoted finding against.

   keywords are our own search aids, never shown on the page. Courts often
   avoid the words people search for. Shelley never says "covenant" and
   Nordlinger never says "Proposition 13", so those words live here instead. */

window.CASES = [
  {
    "id": "euclid-v-ambler-realty-1926",
    "name": "Village of Euclid v. Ambler Realty Co.",
    "citation": "272 U.S. 365 (1926)",
    "year": 1926,
    "decided": "1926-11-22",
    "forum": "U.S. Supreme Court",
    "finding": "A nuisance may be merely a right thing in the wrong place, like a pig in the parlor instead of the barnyard. [...] Under these circumstances, therefore, it is enough for us to determine, as we do, that the ordinance in its general scope and dominant features, so far as its provisions are here involved, is a valid exercise of authority, leaving other provisions to be dealt with as cases arise directly involving them.",
    "finding_source": "Opinion of the Court",
    "source_text": "A nuisance may be merely a right thing in the wrong place, like a pig in the parlor instead of the barnyard. Under these circumstances, therefore, it is enough for us to determine, as we do, that the ordinance in its general scope and dominant features, so far as its provisions are here involved, is a valid exercise of authority, leaving other provisions to be dealt with as cases arise directly involving them.",
    "keywords": ["zoning", "Euclidean zoning", "police power", "land use regulation", "comprehensive zoning", "single-family", "apartment houses", "due process", "takings"],
    "url": "https://en.wikipedia.org/wiki/Village_of_Euclid_v._Ambler_Realty_Co.",
    "url_label": "Wikipedia",
    "opinion_url": "https://www.law.cornell.edu/supremecourt/text/272/365",
    "added": "2026-08-09"
  },
  {
    "id": "shelley-v-kraemer-1948",
    "name": "Shelley v. Kraemer",
    "citation": "334 U.S. 1 (1948)",
    "year": 1948,
    "decided": "1948-05-03",
    "forum": "U.S. Supreme Court",
    "finding": "These are not cases, in which the States have merely abstained from action, leaving private individuals free to impose such discriminations as they see fit. Rather, these are cases in which the States have made available to such individuals the full coercive power of government to deny to petitioners, on the grounds of race or color, the enjoyment of property rights. [...] We hold that in granting judicial enforcement of the restrictive agreements in these cases, the States have denied petitioners the equal protection of the laws.",
    "finding_source": "Opinion of the Court",
    "source_text": "We have no doubt that there has been state action in these cases in the full and complete sense of the phrase. These are not cases, in which the States have merely abstained from action, leaving private individuals free to impose such discriminations as they see fit. Rather, these are cases in which the States have made available to such individuals the full coercive power of government to deny to petitioners, on the grounds of race or color, the enjoyment of property rights. We hold that in granting judicial enforcement of the restrictive agreements in these cases, the States have denied petitioners the equal protection of the laws.",
    "keywords": ["racially restrictive covenants", "restrictive covenant", "deed restriction", "segregation", "state action", "Fourteenth Amendment", "equal protection", "fair housing"],
    "url": "https://en.wikipedia.org/wiki/Shelley_v._Kraemer",
    "url_label": "Wikipedia",
    "opinion_url": "https://www.law.cornell.edu/supremecourt/text/334/1",
    "added": "2026-08-09"
  },
  {
    "id": "us-v-starrett-city-associates-1988",
    "name": "United States v. Starrett City Associates",
    "citation": "840 F.2d 1096 (2d Cir. 1988)",
    "year": 1988,
    "decided": "1988-03-01",
    "forum": "U.S. Court of Appeals, Second Circuit",
    "finding": "We do not intend to imply that race is always an inappropriate consideration under Title VIII in efforts to promote integrated housing. We hold only that Title VIII does not allow appellants to use rigid racial quotas of indefinite duration to maintain a fixed level of integration at Starrett City by restricting minority access to scarce and desirable rental accommodations otherwise available to them. We therefore affirm the judgment of the district court.",
    "finding_source": "Opinion of the Court",
    "source_text": "We do not intend to imply that race is always an inappropriate consideration under Title VIII in efforts to promote integrated housing. We hold only that Title VIII does not allow appellants to use rigid racial quotas of indefinite duration to maintain a fixed level of integration at Starrett City by restricting minority access to scarce and desirable rental accommodations otherwise available to them. We therefore affirm the judgment of the district court.",
    "keywords": ["Fair Housing Act", "Title VIII", "racial quotas", "integration maintenance", "tenanting ratios", "affirmative action", "occupancy ceilings"],
    "url": "https://www.courtlistener.com/opinion/502433/united-states-v-starrett-city-associates-starrett-city-inc-delmar/",
    "url_label": "Full opinion",
    "added": "2026-08-09"
  },
  {
    "id": "nordlinger-v-hahn-1992",
    "name": "Nordlinger v. Hahn",
    "citation": "505 U.S. 1 (1992)",
    "year": 1992,
    "decided": "1992-06-18",
    "forum": "U.S. Supreme Court",
    "finding": "Article XIIIA's acquisition-value assessment scheme does not violate the Equal Protection Clause. [...] First, because the State has a legitimate interest in local neighborhood preservation, continuity, and stability, it legitimately can decide to structure its tax system to discourage rapid turnover in ownership of homes and businesses. Second, the State legitimately can conclude that a new owner, at the point of purchasing his property, does not have the same reliance interest warranting protection against higher taxes as does an existing owner, who is already saddled with his purchase and does not have the option of deciding not to buy his home if taxes become prohibitively high.",
    "finding_source": "Syllabus",
    "source_text": "Article XIIIA's acquisition-value assessment scheme does not violate the Equal Protection Clause. First, because the State has a legitimate interest in local neighborhood preservation, continuity, and stability, it legitimately can decide to structure its tax system to discourage rapid turnover in ownership of homes and businesses. Second, the State legitimately can conclude that a new owner, at the point of purchasing his property, does not have the same reliance interest warranting protection against higher taxes as does an existing owner, who is already saddled with his purchase and does not have the option of deciding not to buy his home if taxes become prohibitively high.",
    "keywords": ["Proposition 13", "Prop 13", "property tax", "acquisition value assessment", "Article XIIIA", "California", "welcome stranger", "tax assessment"],
    "url": "https://www.law.cornell.edu/supremecourt/text/505/1",
    "url_label": "Full opinion",
    "added": "2026-08-09"
  }
];
