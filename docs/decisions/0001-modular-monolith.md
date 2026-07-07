# ADR 0001: Use a Modular Monolith

## Status

Accepted

## Context

The platform needs to support content, armory pages, projects, commerce, membership, accounts, and admin tools.

At the beginning of the project, speed, simplicity, and maintainability matter more than splitting the system into multiple services.

## Decision

We will use a modular monolith.

The main application will live in `apps/web`. Features will be separated by business domain, but they will run inside one deployable Next.js application.

## Consequences

### Benefits

- Faster development
- Simpler deployment
- Easier debugging
- Fewer moving parts
- Clear feature boundaries without microservice overhead

### Tradeoffs

- The codebase must be disciplined
- Feature boundaries must be respected
- Services and repositories should not be bypassed
- Microservices may be considered later if scale requires them
