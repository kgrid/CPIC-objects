(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{359:function(e,t,r){"use strict";r.r(t);var n=r(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"cpic-collection-of-kos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cpic-collection-of-kos"}},[e._v("#")]),e._v(" CPIC Collection of KOs")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/kgrid-objects/cpic-collection/releases/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/github/release/kgrid-objects/cpic-collection.svg",alt:"GitHub release"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://circleci.com/gh/kgrid-objects/cpic-collection",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://circleci.com/gh/kgrid-objects/cpic-collection.svg?style=svg",alt:"CircleCI"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("This is a collection of digital Knowledge Objects (KOs) that focus on dosing guidelines as provided by the "),r("a",{attrs:{href:"https://cpicpgx.org/guidelines/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CPIC pharmacogenomic guidelines"),r("OutboundLink")],1),e._v(". These KOs generally start by accepting pharmacogene allele pairs as inputs and, after mapping those allele pairs to drug metabolism phenotypes, return the corresponding phenotype-specific drug selection or drug dosing guideline recommendation from CPIC based on an individual patient's alleles.")]),e._v(" "),r("h2",{attrs:{id:"status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),r("p",[e._v("The current release of CPIC collection of knowledge objects is "),r("a",{attrs:{href:"https://github.com/kgrid-objects/cpic-collection/releases/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/github/release/kgrid-objects/cpic-collection.svg",alt:"GitHub release"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("This release contains 37 KOs, includihg 7 gene-specific genotype to phenotype (geno-to-pheno) KOs, 28 drug-specific CPIC recommendation KOs, and 2 KGrid look-up table KOs. (The two look-up table KOs enable software application developers to look-up which KO corresponds to a specific gene or drug, respectively. Drug names or gene names are mapped by these KOs to persistent unique identifers for the other 35 KOs in this CPIC Collection of KOs.)")]),e._v(" "),r("h2",{attrs:{id:"what-s-new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's new")]),e._v(" "),r("p",[e._v("As of November 2019, the CPIC collection has been updated and released with the new KO structure. For detail of the changes, please refer to . . .  "),r("a",{attrs:{href:"https://kgrid.org/guides/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("KGrid Guides"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("To deploy the CPIC collection, a KGRID Activator with version 1.1.5 or greater is needed. A suitable KGRID Activator is available at this location . . .  "),r("a",{attrs:{href:"https://github.com/kgrid/kgrid-activator/releases/tag/1.1.5",target:"_blank",rel:"noopener noreferrer"}},[e._v("KGrid Activator"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"cpic-knowledge-objects-ko"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cpic-knowledge-objects-ko"}},[e._v("#")]),e._v(" CPIC Knowledge Objects (KO)")]),e._v(" "),r("h3",{attrs:{id:"cpic-ko-design"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cpic-ko-design"}},[e._v("#")]),e._v(" CPIC KO Design")]),e._v(" "),r("p",[e._v("This CPIC Collection of KOs consists of three different types of KOs:")]),e._v(" "),r("h4",{attrs:{id:"geno-to-pheno-kos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geno-to-pheno-kos"}},[e._v("#")]),e._v(" Geno-to-Pheno KOs")]),e._v(" "),r("p",[e._v("The purpose of geno-to-pheno KOs is to map patient-specific germline genotypes for pharmacogenes to expected, evidence-based, clinically-relevant drug metabolism phenotypes. Pharmacogenomic clinical recommendations are phenotype specific. Therefore, geno-to-pheno KOs are needed for determining phenotypes prior to generating any specific drug selection or drug dosing recommendations.")]),e._v(" "),r("p",[e._v("As the name implies, geno-to-pheno KOs are gene-specific. For 7 different genes, the API-based services provided by these 7 KOs can return an expected phenotype based on on genetic lab results for 7 genes, when those lab results are input in the form of a single patient's diplotype.")]),e._v(" "),r("p",[e._v("There are two sub-groups of geno-to-pheno KOs:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("CYP2D6, CYP2C19 and UGT1A1: Each gene has a spreadsheet mapping the dipltotype directly to the expected phenotype;")])]),e._v(" "),r("li",[r("p",[e._v("CYP2C9, CYP3A5, SLCO1B1 and TPMT: Each gene has a allele-definition spreadsheet for the functional status of the allele. The alleles in the diplotype are checked on the functional status. The likely phenotype is then determined based on the functional status of both alleles.")])])]),e._v(" "),r("p",[e._v("Endpoint:       "),r("code",[e._v("/phenotype")])]),e._v(" "),r("p",[e._v("Input Example (where the patient diplotype for the gene CYP2D6 is represented using star alleles):")]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"CYP2D6"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*1/*1"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("Output Example (Only the "),r("code",[e._v("result")]),e._v(" of the response is shown):")]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"CYP2D6"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"diplotype"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*1/*1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"phenotype"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Normal metabolizer"')]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v('Note that the phenotype returned by a geno-to-pheno KO takes the form of a text string, e.g., "Normal metabolizer". These phenotype text strings conform to the CPIC standard vocabularly for describing clinically-relevant, gene-specific, drug metabolism phenotypes.')]),e._v(" "),r("p",[e._v('Not all valid diplotypes for the 7 genes associated with these KOs will return an expected phenotype. In some cases, expected phenotypes are unknown and, in those cases, the "phenotype" output from a geno-to-pheno KO API service interaction will be returned as "Unknown".')]),e._v(" "),r("h4",{attrs:{id:"drug-recommendation-kos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#drug-recommendation-kos"}},[e._v("#")]),e._v(" Drug recommendation KOs")]),e._v(" "),r("p",[e._v("Drug recommendation KOs are all drug-specific. They provide CPIC's evidence-based recommendations based in most cases on a patient's germline phenotype for one or more relevant pharmacogene(s). In a few cases, a genetic lab test result, in the form of a diplotype, can be used directly to generate a CPIC recommendation (e.g., when a specific HLA-B diplotype is contraindication for exposure to the drug abacavir.)")]),e._v(" "),r("p",[e._v("Because the drug recommendation KOs work in more than one way, the structure and content of the inputs to drug recommendation KOs differ. Below, we show the primary set of inputs that most of the drug recommendation KOs use. Most drug recommendation KOs use phenotype information to generate drug-specific recommendations.")]),e._v(" "),r("p",[e._v("The drug recommendation KO will take a phenotype panel (i.e., one or more gene-specific phenotypes) as input, extract the needed gene and provide CPIC drug selection or drug dosing recommendations as output.")]),e._v(" "),r("p",[e._v("Endpoint:       "),r("code",[e._v("/dosingrecommendation")])]),e._v(" "),r("p",[e._v("Input Example:")]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"CYP2C19"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"diplotype"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*1/*1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"phenotype"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Normal metabolizer"')]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"CYP2D6"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"diplotype"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*1/*1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"phenotype"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"normal metabolizer"')]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  ...\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("Output Example (Only the "),r("code",[e._v("result")]),e._v(" of the response is shown):")]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CPIC Recommendation"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"drug"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Codeine"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"genes"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"CYP2D6"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"diplotype"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*1/*1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"phenotype"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"normal metabolizer"')]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"recommendation"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"implication"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Normal morphine formation"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"content"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Use label-recommended age- or weight-specific dosing."')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"classification"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Strong"')]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v('Each recommendation provided as output from the API-based services enabled by these KOs has three parts, all of which come from CPIC guidelines. The first part is the "implication." This part tells about drug metabolism in general. The second part is "content". The content carries the actual text of a CPIC recommendation for clinical medication use. The third part is the "classification", which conveys the class (or strength) of evidence.')]),e._v(" "),r("h4",{attrs:{id:"look-up-table-kos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#look-up-table-kos"}},[e._v("#")]),e._v(" Look-up table KOs")]),e._v(" "),r("p",[e._v("The two look-up table KOs provide the persistent unique identifiers (PUIDs) for the other CPIC KOs in this collection. These look-up table KOs are meant to help application developers find which KOs are associated either with a specific gene or with a specific drug. In this case, for KGrid, the PUIDs are Archive Resource Key (ARK) identifiers. ARK identifiers are described in more detail here . . . "),r("a",{attrs:{href:"https://n2t.net/e/ark_ids.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARK IDs Explained"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Endpoint for look-up table KO for geno-to-pheno KOs:   "),r("code",[e._v("/genophenokolist")])]),e._v(" "),r("p",[e._v("Input for look-up table for geno-to-pheno KOs:")]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"CYP2D6"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"CYP2C19"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"UGT1A1"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   ...\n "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("Output from look-up table for geno-to-pheno KOs (the ARK identifiers in use all begin with /99999/):")]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"CYP2D6"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/99999/fk49z9gr7p"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"CYP2C19"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/99999/fk4mc97w0h"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"UGT1A1"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/99999/fk47h1x090"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n ...\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("Endpoint for look-up table for drug specific KOs:   "),r("code",[e._v("/druglist")])]),e._v(" "),r("p",[e._v("Input for look-up table for drug-specific KOs:")]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"codeine"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"atazanavir"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  ...\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("Output for drug list table (the ARK identifiers in use all begin with /99999/):")]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"codeine"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/99999/fk4mc97w6m"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"atazanavir"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/99999/fk4d79nq4z"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   ...\n "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("Note: For look-up table for drug-specific KOs, an input of empty object "),r("code",[e._v("{}")]),e._v(" will produce the output containing the entire list of all available KOs from the service of either look-up table KO.")]),e._v(" "),r("h3",{attrs:{id:"cpic-ko-descriptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cpic-ko-descriptions"}},[e._v("#")]),e._v(" CPIC KO Descriptions")]),e._v(" "),r("h4",{attrs:{id:"genotype-to-phenotype-kos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#genotype-to-phenotype-kos"}},[e._v("#")]),e._v(" Genotype to Phenotype KOs")]),e._v(" "),r("p",[e._v("Currently, the following genes' phenotypes can be determined based on their diplotypes by these KOs:")]),e._v(" "),r("ol",[r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4mc97w0h%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("CYP2C19"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4bv8qb3r%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("CYP2C9"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk49z9gr7p%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("CYP2D6"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4md04x9z%2F0.1.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("CYP3A5"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk47380j09%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("SLCO1B1"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4vq45s09%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("TPMT"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk47h1x090%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("UGT1A1"),r("OutboundLink")],1)])])]),e._v(" "),r("h4",{attrs:{id:"drug-recommendation-kos-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#drug-recommendation-kos-2"}},[e._v("#")]),e._v(" Drug Recommendation KOs")]),e._v(" "),r("p",[e._v("Currently, the following drug recommendations are available as knowledge objects.")]),e._v(" "),r("ol",[r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk45m7fn9t%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Abacavir (based on HLA-B allele information)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4058s74p%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Allopurinol (based on HLA-B allele information)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4t167482%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amitriptyline (based on CYP2C19 and CYP2D6 phenotypes)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4d79nq4z%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atazanavir (based on UGT1A1 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4r225c4h%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azathioprine (based on TPMT phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4mw3nw5p%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Carbamazepine (based on HLA-A and HLA-B allele information)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4d22836k%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Citalopram (based on CYP2C19 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4w67pr0f%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clomipramine (based on CYP2C19 and CYP2D6 phenotypes)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4bz6hp15%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clopidogrel (based on CYP2C19 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4mc97w6m%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Codeine (based on CYP2D6 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4rf6zx6d%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Desipramine (based on CYP2C19 and CYP2D6 phenotypes)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4sf40t7f%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doxepin (based on CYP2C19 and CYP2D6 phenotypes)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4d22836l%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Escitalopram (based on CYP2C19 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Fcp4mc9723sd%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fluvoxamine (based on CYP2D6 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4d51vd1p%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Imipramine (based on CYP2C19 and CYP2D6 phenotypes)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4m91fj9z%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mercaptopurine (based on TPMT phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk44n0ds5c%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nortriptyline (based on CYP2C19 and CYP2D6 phenotypes)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4c83hw23%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ondansetron (based on CYP2D6 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4qc17m5z%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oxcarbazepine (based on HLA-B allele information)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Fcp4mc9723se%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paroxetine (based on CYP2D6 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4qz3fz89%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Phenytoin (based on CYP2C9 phenotype and HLA-B allele information)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk40k3kt35%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sertraline (based on CYP2C19 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4m95ek9z%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simvastatin (based on SLCO1B1 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4t85em9x%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tacrolimus (based on CYP3A5 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4cx5fm8f%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thioguanine (based on TPMT phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4jw9m41b%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Trimipramine (based on CYP2C19 and CYP2D6 phenotypes)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4fn2d721%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tropisetron (based on CYP2D6 phenotype)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://library.kgrid.org/#/object/99999%2Ffk4cz4fm8f%2Fv0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Voriconazole (based on CYP2C19 phenotype)"),r("OutboundLink")],1)])])]),e._v(" "),r("h2",{attrs:{id:"deployment-of-cpic-kos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deployment-of-cpic-kos"}},[e._v("#")]),e._v(" Deployment of CPIC KOs")]),e._v(" "),r("p",[e._v("Please refer to "),r("a",{attrs:{href:"./deployment"}},[e._v("the instruction page")]),e._v(" for deploying and using the collection of CPIC KOs.")])])}),[],!1,null,null,null);t.default=a.exports}}]);