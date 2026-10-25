# Bathing Capacity Tool

## The problem

Production planning needed a reliable way to forecast material delivery against manufacturing capacity — without it, planning errors and stockouts were harder to catch ahead of time.

> Fill in the specific manufacturing process this tool supports at Masco — what "bathing capacity" refers to in your plant, and who requested this tool.

## What I built

A production-critical forecasting application that takes capacity and demand inputs and produces planning output used directly by manufacturing operations to schedule material delivery.

## Architecture

1. **Inputs** — demand and capacity figures pulled from SQL Server.
2. **Forecasting logic** — T-SQL / stored-procedure calculations model expected capacity against demand.
3. **Planning output** — results written to planning tables used by the operations team.
4. **Reporting** — delivery accuracy tracked and surfaced back to stakeholders.

## Stack

`T-SQL` · `C# (ASP.NET WebForms)` · `SQL Server`

## Impact

- Improved material delivery accuracy for manufacturing operations.
- Gave planners a repeatable forecasting process instead of manual estimation.

*(Add real before/after numbers here once you're ready to share them.)*

## What I'd do differently

Notes for you to fill in — would this benefit from a proper forecasting/ML approach now that you're learning Python and data science?
