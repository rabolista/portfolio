# Retail ETL Pipelines

## The problem

Sales, Inventory and Forecasting data from major retail partners (The Home Depot, Walmart, RONA) needed to land in SQL Server accurately and on schedule — daily and weekly — to support downstream reporting and planning tools.

> Fill in: how many source feeds, what format they arrive in (EDI, flat files, API), and roughly what volume you're processing.

## What I built

SSIS ETL pipelines that extract, validate, and load retail partner data into SQL Server warehouse tables, with integrity checks to catch bad or incomplete data before it reaches reporting.

## Architecture

1. **Extract** — pull daily/weekly feeds from retail partner sources.
2. **Stage & validate** — SSIS staging tables with data integrity checks.
3. **Transform** — business logic and mapping applied per retailer.
4. **Load** — final tables land in SQL Server, feeding the reconciliation tools and Power BI dashboards.

## Stack

`SSIS` · `SQL Server` · `T-SQL`

## Impact

- Reliable daily/weekly data flow supporting three major retail partners.
- Data integrity checks reduced downstream reporting errors.

*(Add real throughput / error-rate numbers once confirmed.)*

## What I'd do differently

Notes for you to fill in — e.g. would a modern orchestrator (Airflow, ADF, or Databricks workflows) replace SSIS here if you rebuilt this today?
