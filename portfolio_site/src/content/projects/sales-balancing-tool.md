# Sales Balancing Tool

## The problem

JD Edwards (our ERP) and Cognos (our reporting layer) were tracking the same sales data through two different pipelines. Small timing and mapping differences between them meant Finance and Sales leadership were sometimes looking at numbers that didn't match — and nobody had a fast way to tell *why* they didn't match, only that they didn't.

## What I built

A SQL-driven reconciliation process that pulls comparable extracts from both JD Edwards and Cognos, lines them up on a common key, and flags exactly where and why the two systems diverge — instead of leaving someone to manually eyeball two spreadsheets.

> Replace this section with the real detail: what tables/views you pulled from, how you defined "matching," and what the discrepancy report actually looks like.

## Architecture

1. **Extract** — scheduled pulls from JD Edwards and Cognos into staging tables.
2. **Normalize** — align both sources on the same grain (date, SKU/customer, business unit).
3. **Compare** — T-SQL logic identifies mismatches above a tolerance threshold.
4. **Report** — discrepancies surfaced for Finance/Sales to review and resolve.

## Stack

`T-SQL` · `Stored Procedures` · `JD Edwards` · `Cognos` · `SQL Server`

## Impact

- Reduced manual reconciliation effort.
- Gave Finance a repeatable, auditable process instead of ad-hoc spreadsheet checks.
- Improved trust in the numbers across Sales and Finance.

*(Replace the bullet points above with real, specific numbers once you're comfortable sharing them — e.g. hours saved per week, % reduction in discrepancies.)*

## What I'd do differently

Notes for you to fill in — e.g. would you move this to a proper ETL orchestrator now? Would Snowflake's change-tracking make this easier today?
