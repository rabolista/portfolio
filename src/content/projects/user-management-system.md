# User Management System (UMS)

## The problem

Promotional web environments needed a reliable backend to handle who could log in, what they were allowed to do, and how their access was provisioned — without manual setup for every new user or promotion cycle.

> Fill in: what kind of promotions/campaigns used this system, and roughly how many users it handled.

## What I built

A backend authentication and authorization system handling user accounts, role-based access, and automated data provisioning for promotional web platforms.

## Architecture

1. **Request** — user signs up or is provisioned for a promotional campaign.
2. **Authentication** — credential validation layer.
3. **Authorization** — role and permission rules determine what the user can access.
4. **Provisioning** — user data automatically set up across dependent systems.

## Stack

`C# (ASP.NET WebForms)` · `SQL Server`

## Impact

- Removed manual account setup steps for promotional campaigns.
- Centralized authentication/authorization logic instead of one-off per-campaign solutions.

## What I'd do differently

Notes for you to fill in — e.g. would you rebuild the auth layer with a modern framework (ASP.NET Core / Identity) today instead of WebForms?
