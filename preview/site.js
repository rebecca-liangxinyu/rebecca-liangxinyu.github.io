/* Site content and rendering.
   Every fact here comes from Rebecca's resumes. Do not add claims that are not in them.
   Bullets: "fin" = finance emphasis, "ops" = operations and go-to-market emphasis.
   A role with only one set shows that set on every version of the page. */
(function () {
  "use strict";

  var variant = document.body.getAttribute("data-variant") || "main";

  var ARCS = [
    {
      id: 5, name: "Tax and structuring", years: "2026 – Present", grind: true,
      roles: [
        {
          id: "willens", org: "Robert Willens LLC", title: "Corporate Tax & M&A Research Analyst",
          dates: "Jun 2026 – Present", place: "New York",
          fin: [
            "Researched IRC §§355, 361 and 368 for a proposed multibillion-dollar equity separation and downstream merger.",
            "Compared taxable asset sales, tax-deferred contributions, triangular mergers and split-offs for spectrum-for-equity transactions.",
            "Researched IRC §382(l)(5)/(6) to preserve net operating losses in a proposed Chapter 11 debt-for-equity restructuring."
          ]
        }
      ]
    },
    {
      id: 4, name: "Investing", years: "2025 – 2026", grind: true,
      roles: [
        {
          id: "neuco", org: "NeuCo Fund Management", title: "Investment Associate",
          dates: "Jun 2025 – Jun 2026", place: "New York",
          fin: [
            "Modeled and underwrote secondary investments using NAV roll-forwards, DPI/MOIC analysis and fee-and-carry waterfalls.",
            "Executed asset-level diligence on $100M+ of LP interests across tail-end funds, side pockets and direct SPVs.",
            "Supported LP-block transactions including a $32M XiaoHongShu position (closed)."
          ],
          ops: [
            "Conducted NAV-based valuation analysis on $100M+ in LP secondary interests and recommended acquisition prices at a discount to reported NAV.",
            "Standardized investor communications for bilingual institutional audiences, developing LP materials and managing roadshow logistics across Asia and the US."
          ]
        }
      ]
    },
    {
      id: 3, name: "MBA and pivot to finance", years: "2022 – 2025", grind: true,
      roles: [
        {
          id: "cbs", org: "Columbia Business School", title: "MBA, Finance & Strategy",
          dates: "Graduated May 2025", place: "New York",
          fin: [
            "Top 5% of class in Tax Factors for Investment Banking and in Distressed Value Investing.",
            "Forte Fellow, Columbia Fellow, Frances Alexander Scholarship, Tamer Center Social Enterprise Fellow.",
            "Exchange student at Berkeley Haas, Fall 2024."
          ]
        },
        {
          id: "ta", org: "Columbia Business School", title: "Teaching Assistant, Tax Factors for Investment Banking",
          dates: "Jan – May 2025", place: "New York",
          fin: [
            "Supported MBA-level instruction on corporate reorganizations, tax-free spin-offs and M&A structuring for Professor Robert Willens."
          ]
        },
        {
          id: "artforfilm", org: "Art for Film", title: "Operations Consultant (Columbia Business School project)",
          dates: "Sep – Dec 2024", place: "New York",
          ops: [
            "Redesigned end-to-end sales workflows, cutting turnaround from 3 days to under 24 hours and quoting errors by 25–40%.",
            "Built a pricing calculator from historical invoice data that standardized 80%+ of quotes."
          ]
        },
        {
          id: "ubs", org: "UBS, Global Industrials Group", title: "MBA Associate",
          dates: "Summer 2024", place: "New York",
          fin: [
            "Executed 11 engagements across M&A, financing and advisory, including DCF and LBO modeling, credit analysis and transaction comparables.",
            "Supported debt financing for a $50B PE-owned manufacturer through the credit-approval process.",
            "Built a 1,000+ company industrial-tech and data-center database and shortlisted 300+ actionable M&A targets."
          ],
          ops: [
            "Designed a centralized deal intelligence platform for the industrial banking group, improving deal execution speed by 30%.",
            "Coordinated 11 client-facing engagements across M&A, lending and advisory workstreams.",
            "Built a tiered 1,000+ company database to identify M&A targets, improving deal-sourcing efficiency by 18%."
          ]
        },
        {
          id: "solarkal", org: "SolarKal", title: "MBA Associate",
          dates: "May – Sep 2023", place: "New York",
          ops: [
            "Designed and deployed a real-time solar project IRR calculator with incentive and regulatory inputs, giving the sales team instant return projections."
          ]
        },
        {
          id: "capvis", org: "Capvis AG", title: "Summer Associate",
          dates: "Summer 2022", place: "Singapore",
          fin: [
            "Developed the Asia fundraising strategy for Capvis V, building a pipeline of 40+ institutional LPs."
          ]
        }
      ]
    },
    {
      id: 2, name: "Startup accelerators", years: "2017 – 2022", grind: true,
      roles: [
        {
          id: "brinc", org: "BRINC", title: "Manager, Alternative Protein",
          dates: "May 2020 – Aug 2022", place: "Shanghai / Singapore",
          fin: [
            "Led eight cross-border early-stage investments from sourcing through diligence and close, evaluating 40+ opportunities.",
            "Led portfolio fundraising that raised $20M+ in follow-on capital, including Haofood ($3M) and CellX ($4.3M).",
            "Built a 200+ partner ecosystem supporting R&D, pilots, production and commercialization."
          ],
          ops: [
            "Stood up China's first alt-protein food tech accelerator as a 0-to-1 build, with a 200+ expert ecosystem including Nestle, Givaudan and Buhler.",
            "Designed a multi-criteria evaluation framework that cut average diligence time by 60%.",
            "Owned P&L and reached financial sustainability for the alt-protein vertical with a near-zero-cost operating model."
          ]
        },
        {
          id: "wework", org: "WeWork Labs", title: "Manager",
          dates: "Feb 2017 – May 2020", place: "Shanghai",
          fin: [
            "Launched and scaled eight Labs across five cities.",
            "Built a 140+ startup and 60+ mentor ecosystem and facilitated $15M+ of pre-seed and seed funding."
          ],
          ops: [
            "Authored WeWork Labs China's first operating playbooks and SOPs, launching and scaling 8 Labs across 5 cities.",
            "Led growth, GTM and operations for 140+ startups and 60+ mentors, facilitating $15M+ in pre-seed and seed funding.",
            "Structured partnership programs with Starbucks, AliCloud, AWS and universities."
          ]
        }
      ]
    },
    {
      id: 1, name: "Market entry and launch", years: "2014 – 2017", grind: false,
      roles: [
        {
          id: "druzhiba", org: "Shanghai Druzhiba Trading", title: "Founder",
          dates: "Feb 2016 – Feb 2017", place: "Shanghai",
          ops: [
            "Brought a new-to-market bottled water business to operational readiness for Didi Global's 15M+ driver network.",
            "Negotiated exclusive distribution rights with Didi Global through a PetroChina partnership, with driver pickup at PetroChina's 20k+ convenience stores."
          ]
        },
        {
          id: "neoventure", org: "NeoVenture Consulting", title: "Consultant",
          dates: "Sep 2014 – Mar 2016", place: "Shanghai",
          ops: [
            "Advised market entry for Chevron and TOTAL in Myanmar and Vietnam, securing official Ministry of Energy endorsement.",
            "Built frameworks connecting multinationals, local SMEs and government bodies across Southeast Asian markets."
          ]
        }
      ]
    }
  ];

  var GRIND = {
    id: "grind", org: "Startup Grind", title: "Operations Lead", dates: "2017 – Present",
    ops: [
      "Scaled Shanghai chapter operations from 500 to 2,500 members and grew the core team 150% in 3 years.",
      "Currently leads NYC chapter event operations for 500+ entrepreneurs."
    ]
  };

  /* Roles whose cards start open on each version */
  var OPEN = { main: [], finance: ["willens", "neuco", "ubs"], gtm: ["brinc", "wework"] };

  var SKILLS = {
    fin: {
      name: "Finance",
      items: ["DCF and LBO modeling", "Credit analysis", "Transaction comparables", "NAV roll-forwards",
        "DPI/MOIC analysis", "Fee-and-carry waterfalls", "Tax research (IRC §§355, 368, 382)"]
    },
    ops: {
      name: "Operations and go-to-market",
      items: ["GTM", "Strategic planning", "Process improvement", "SOP development",
        "KPI and OKR frameworks", "Stakeholder management", "Program management"]
    },
    tools: {
      name: "Tools",
      items: ["SQL (BigQuery)", "Tableau", "Power BI", "Advanced Excel", "Stata", "Airtable", "JIRA", "AI tools"]
    }
  };

  var EDUCATION = [
    {
      school: "Columbia Business School", degree: "MBA, Finance & Strategy", date: "May 2025",
      notes: [
        "Top 5% of class in Tax Factors for Investment Banking and in Distressed Value Investing",
        "Forte Fellow · Columbia Fellow · Frances Alexander Scholarship · Tamer Center Social Enterprise Fellow",
        "Exchange student at Berkeley Haas, Fall 2024",
        "One of 5 CBS students in the joint Columbia Law School course on drafting and negotiating complex M&A transactions, Fall 2023"
      ]
    },
    { school: "Hefei Normal University", degree: "BA, Education", date: "June 2014", notes: [] }
  ];

  var CASES = {
    fin: { tag: "Finance", title: "Finance case study", text: "In progress. The full write-up will be published here." },
    ops: { tag: "Go-to-market", title: "Go-to-market case study", text: "In progress. The full write-up will be published here." }
  };

  /* ---------- helpers ---------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function bulletsFor(role) {
    var first = variant === "gtm" ? "ops" : "fin";
    var second = first === "fin" ? "ops" : "fin";
    if (variant === "main") {
      /* Main page: finance wording where a role has it, otherwise operations wording */
      return role.fin || role.ops || [];
    }
    return role[first] || role[second] || [];
  }

  function roleItem(role) {
    var li = el("li", "role-item");
    var open = OPEN[variant].indexOf(role.id) !== -1;
    var btn = el("button", "role");
    btn.type = "button";
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-controls", "card-" + role.id);

    var main = el("span", "role-main");
    main.appendChild(el("span", "role-org", role.org));
    main.appendChild(el("span", "role-title", role.title));
    btn.appendChild(main);
    btn.appendChild(el("span", "role-dates", role.dates));
    var chev = el("span", "chev");
    chev.setAttribute("aria-hidden", "true");
    btn.appendChild(chev);

    var card = el("div", "role-card");
    card.id = "card-" + role.id;
    card.hidden = !open;
    if (role.place) card.appendChild(el("p", "role-place", role.place));
    var ul = el("ul");
    bulletsFor(role).forEach(function (b) { ul.appendChild(el("li", null, b)); });
    card.appendChild(ul);

    btn.addEventListener("click", function () {
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
      card.hidden = isOpen;
    });

    li.appendChild(btn);
    li.appendChild(card);
    return li;
  }

  /* ---------- timeline ---------- */
  function renderTimeline(root) {
    var ol = el("ol", "tl");
    ARCS.forEach(function (arc) {
      var li = el("li", "arc arc-" + arc.id + (arc.grind ? " has-grind" : ""));
      li.appendChild(el("span", "grind-line"));
      li.appendChild(el("span", "arc-bar"));
      var body = el("div", "arc-body");
      var head = el("div", "arc-head");
      head.appendChild(el("h3", null, arc.name));
      head.appendChild(el("span", "arc-years", arc.years));
      body.appendChild(head);
      var roles = el("ul", "roles");
      arc.roles.forEach(function (r) { roles.appendChild(roleItem(r)); });
      body.appendChild(roles);
      li.appendChild(body);
      ol.appendChild(li);
    });
    root.appendChild(ol);

    var side = el("div", "grind-legend");
    side.appendChild(el("span", "grind-swatch"));
    var ul = el("ul", "roles");
    ul.appendChild(roleItem(GRIND));
    side.appendChild(ul);
    root.appendChild(side);

    root.appendChild(el("p", "hint", "Select a role to see details."));
  }

  /* ---------- case studies ---------- */
  function renderCases(root) {
    var order = variant === "gtm" ? ["ops", "fin"] : ["fin", "ops"];
    order.forEach(function (k) {
      var c = CASES[k];
      var card = el("article", "case-card case-" + k);
      var top = el("div", "case-top");
      top.appendChild(el("span", "case-tag", c.tag));
      top.appendChild(el("span", "soon", "Coming soon"));
      card.appendChild(top);
      card.appendChild(el("h3", null, c.title));
      card.appendChild(el("p", null, c.text));
      root.appendChild(card);
    });
  }

  /* ---------- skills ---------- */
  function renderSkills(root) {
    var order = variant === "gtm" ? ["ops", "fin", "tools"] : ["fin", "ops", "tools"];
    order.forEach(function (k) {
      var g = SKILLS[k];
      var row = el("div", "skill-row skill-" + k);
      row.appendChild(el("h3", null, g.name));
      var ul = el("ul", "tags");
      g.items.forEach(function (s) { ul.appendChild(el("li", null, s)); });
      row.appendChild(ul);
      root.appendChild(row);
    });
    root.appendChild(el("p", "hint", "Each skill will link to the case study section that demonstrates it once the case studies are published."));
  }

  /* ---------- education ---------- */
  function renderEducation(root) {
    EDUCATION.forEach(function (e) {
      var item = el("div", "edu");
      var head = el("div", "edu-head");
      var left = el("div");
      left.appendChild(el("h3", null, e.school));
      left.appendChild(el("p", "edu-degree", e.degree));
      head.appendChild(left);
      head.appendChild(el("span", "edu-date", e.date));
      item.appendChild(head);
      if (e.notes.length) {
        var ul = el("ul");
        e.notes.forEach(function (n) { ul.appendChild(el("li", null, n)); });
        item.appendChild(ul);
      }
      root.appendChild(item);
    });
  }

  function mount(id, fn) {
    var root = document.getElementById(id);
    if (root) { root.textContent = ""; fn(root); }
  }

  mount("timeline-root", renderTimeline);
  mount("cases-root", renderCases);
  mount("skills-root", renderSkills);
  mount("education-root", renderEducation);

  /* The address is assembled here so it is not sitting in the page for spam scrapers. */
  var user = "XL3209", host = "columbia.edu";
  document.querySelectorAll(".js-email").forEach(function (a) {
    a.href = "mailto:" + user + "@" + host;
  });
})();
