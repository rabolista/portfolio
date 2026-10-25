# Power BI Dashboard Suite

## The problem

Sales, Operations, Supply Chain and Finance were each looking at data through different lenses — with no shared, trustworthy view of sell-through, in-stock rates, and forecasting accuracy across major retail channels.

## What I built

A suite of Power BI dashboards and semantic data models built on top of reconciled SQL Server data, giving each business unit a live view tailored to their needs while pulling from the same underlying source of truth.

> Fill in specifics: how many dashboards, which DAX measures were hardest to get right, how you handled row-level security if any.

## Architecture

1. **Source** — reconciled warehouse tables (fed by the ETL & reconciliation tools above).
2. **Semantic model** — star-schema style model with DAX measures for sell-through, in-stock rate, forecast accuracy.
3. **Dashboard build** — report pages per business unit (Sales / Ops / Supply Chain / Finance).
4. **Rollout** — stakeholder training and adoption across teams, replacing legacy Excel/Crystal Reports workflows.

## Stack

`Power BI` · `DAX` · `SQL Server`

## Impact

- Replaced legacy Excel/Crystal Reports processes for multiple business units.
- Gave leadership a faster path from data to decision.

*(Add real numbers on adoption / turnaround time improvement once confirmed.)*

## What I'd do differently

Notes for you to fill in — e.g. would you restructure the data model now that you know more about dimensional modeling from your Data Science coursework?
