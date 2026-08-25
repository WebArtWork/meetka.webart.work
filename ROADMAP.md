# Meetka — Phase 1 Roadmap

## Goal

Meetka helps people meet in real life around partner coffee shops. The first release should focus on discovering coffee shops and meets, joining or organizing meets, lightweight networking, and explaining how Meetka works for coffee shops and baristas.

Core principles:

- Coffee shops are the main physical community points.
- Meets can only happen at partner coffee shops.
- Public discovery should work without authentication where possible.
- Authentication is required for user-specific actions such as creating or joining a meet.
- Profiles stay lightweight.
- No generic people directory.
- No chat, ratings, in-app payments, or complex reputation system in Phase 1.
- Interests come from a predefined list.
- Coffee shop menus are informational in Phase 1.

---

## 1. Map

### Purpose

Primary discovery page for finding partner coffee shops and nearby meets.

### Elements

- Interactive map
- Coffee shop markers
- Meet markers or meet indicators around coffee shops
- Current user location
- Search by area
- Interest filters
- Date/time filters
- Public/private meet visibility rules
- Quick coffee shop preview
- Quick meet preview
- Open Coffee Shop action
- Open Meet action
- Link to Coffee Shops page

### Default behavior

Show nearby partner coffee shops and relevant upcoming public meets based on location and selected interests.

---

## 2. Coffee Shops

### Purpose

Generic list page for discovering all coffee shops that work with Meetka.

### Elements

- Coffee shop cards
- Search
- Location/area filtering
- Interest/community relevance
- Distance
- Open/closed status where available
- Upcoming meet count
- Menu availability indicator
- Open Coffee Shop action
- Map view action

### Generic filtering support

The same page should be reusable for:

- all partner coffee shops;
- nearby coffee shops;
- coffee shops in a specific city/area;
- coffee shops with meets matching selected interests;
- coffee shops connected to a specific meet.

---

## 3. Coffee Shop

### Purpose

Main community page for one partner coffee shop.

### Elements

- Coffee shop name
- Photos
- Address
- Map/location
- Working hours
- Contact/basic information
- Community description
- Menu preview
- Open Menu action
- Upcoming meets
- Recurring meets
- Meet filters
- Create Meet action
- Share coffee shop/community action
- Link to full Meets page filtered by this coffee shop
- Information about how Meetka works at this location

### Default behavior

Show the most relevant upcoming public meets first, followed by recurring meets and the coffee shop menu.

---

## 4. Meets

### Purpose

Generic reusable list of meets.

### Elements

- Meet cards
- Search
- Interest/tag filters
- Coffee shop filter
- Date/time filter
- Area/location filter
- Public/private filtering where applicable
- Recurring meet indicator
- Participant count
- Organizer information
- Coffee shop information
- Create Meet action
- Open Meet action

### Generic filtering support

The page should support showing:

- nearby meets;
- meets at a specific coffee shop;
- meets created by a specific user;
- meets a user participates in;
- meets on a specific date;
- meets within a selected area;
- meets matching selected interests;
- upcoming meets;
- past meets;
- recurring meets.

### Default behavior

Show upcoming public meets near the user and prioritize meets matching their interests.

---

## 5. Meet

### Purpose

Full page for a single meet.

### Elements

- Meet title
- Description/theme
- Interests/tags
- Coffee shop
- Coffee shop location
- Date and time
- Recurrence information
- Organizer
- Participant limit if used
- Current participant count
- Participant list
- User profile previews
- Going ON/OFF toggle
- Share action
- Open Coffee Shop action
- Open Menu action
- Recurring meet information
- Current occurrence/date state
- Organizer controls
- Edit action for organizer
- Remove participant action for organizer
- Cancel/deactivate meet action for organizer

### Private meets

- Accessible through a shared link.
- Not shown in normal public discovery.
- Participants can see the participant list after opening the meet.
- Used for private friend groups and other link-only meetings.
- Can also support the Magic Coffee flow.

### Recurring meets

- A user joins the recurring meet once.
- Participation for each new occurrence starts as Going = OFF.
- Users manually enable Going for the current/upcoming occurrence.

---

## 6. Meet Mutate

Suggested route/name: `meet/mutate`

### Purpose

Create or edit a meet using the same page/form.

### Elements

- Create/Edit mode
- Coffee shop selector
- Meet title
- Description/theme
- Predefined interests/tags selector
- Public/Private selector
- Date
- Start time
- End time where needed
- Recurring ON/OFF
- Recurrence type
- Recurrence days/settings
- Recurrence end where needed
- Participant limit
- Save action
- Cancel action
- Delete/deactivate action in Edit mode

### Rules

- Any authenticated user can create a meet.
- Meets must belong to a partner coffee shop.
- Private means link-only.
- No manually entered interests in Phase 1.

---

## 7. My Meets

Implementation should reuse the generic `Meets` page rather than introducing separate list logic.

### Purpose

Personal entry point into the user's meet activity.

### Recommended filters/tabs

- Upcoming
- Going
- Created by me
- Recurring
- Past

### Elements

- Same meet cards and filters as the generic Meets page
- Create Meet action
- Quick Going toggle where appropriate
- Open Meet action

---

## 8. Menu

### Purpose

Show the existing coffee shop menu data inside Meetka.

### Elements

- Coffee shop identity
- Menu categories
- Products
- Product names
- Descriptions
- Prices
- Sizes/options where already supported
- Availability where already supported
- Back to Coffee Shop action

### Phase 1 rules

- Informational only.
- No cart.
- No checkout.
- No in-app ordering.
- No in-app payments.

The existing `company.menu.*` API structure should be reused.

---

## 9. For Coffee Shops

### Purpose

Explain why a coffee shop should become a Meetka partner.

### Elements

- What Meetka is
- How partner coffee shops appear on the map
- Coffee shop community concept
- How users create and join meets at the coffee shop
- Recurring communities
- How Meetka can bring additional visitors
- Menu visibility
- Role of the coffee shop as a local networking point
- Phase 1 partnership expectations
- Contact / Become a Partner action
- FAQ

### Message

The page should focus on community and additional foot traffic rather than monetization.

---

## 10. For Baristas

### Purpose

Explain how Meetka changes and expands the barista's role without making the workflow complicated.

### Elements

- Introduction to Meetka
- Barista as a social connector
- Helping users understand local meets
- Helping people recognize/find their meet when appropriate
- Magic Coffee concept
- Real-life introduction concept
- Boundaries and lightweight participation
- No requirement to become a formal matchmaker
- Benefits for the barista and coffee shop community
- Link to Barista Profile
- FAQ

### Phase 1 positioning

Participation should feel optional, human, and lightweight. Meetka should not create complex operational work for the barista.

---

## 11. Barista Profile

### Purpose

Public profile for a participating barista and a foundation for future barista-specific features.

### Elements

- Photo
- Name
- Coffee shop
- Short bio
- Interests
- Working/available status where appropriate
- Tip information/options
- External tip/payment links if supported outside Meetka
- Social links where appropriate
- Meetka contribution/community information
- Share profile action

### Phase 1 rules

- No in-app tip payment processing.
- Tip options may link to existing external methods.
- Keep the profile lightweight.

---

## 12. Sign

Existing page.

### Meetka-specific requirements

- Sign in
- Registration
- Password recovery
- Redirect back to the action/page that required authentication

### Authentication principle

Public discovery should remain accessible without a token. Authentication is requested when the user performs a personal or modifying action.

---

## 13. Profile

Existing page.

### Meetka-specific additions

- Photo
- Age
- Gender
- Predefined interests selector
- Current/upcoming meets where useful
- Meets created by the user
- Shared meet history where appropriate
- Invite to another meet action where business logic allows

### Rules

- Keep profiles minimal.
- No generic people search/list.
- Users are primarily discovered through meets they joined.

---

## 14. Settings

Existing page.

### Meetka-specific additions

- Location preferences
- Interest preferences if not managed entirely from Profile
- Discovery radius
- Notification preferences when notifications are introduced
- Privacy/account controls

---

# Main Phase 1 User Flows

## Discover and join a public meet

`Map → Coffee Shop → Meet → View participants → Sign in if required → Going ON → Meet in real life`

## Discover through a list

`Meets → Filter by interest/date/area → Meet → Going ON`

## Create a meet

`Coffee Shop / Meets → Create Meet → Meet Mutate → Share or publish → Participants join`

## Join a private meet

`Shared link → Private Meet → View details → Sign in if required → Going ON`

## Recurring meet

`Meet → Join recurring series → Each occurrence starts Going OFF → User enables Going for the date they plan to attend`

## Explore a coffee shop

`Map / Coffee Shops → Coffee Shop → Community meets / recurring meets / menu`

## Magic Coffee foundation

`Private Meet → Two participants → Real-life coordination through the coffee shop/barista`

No separate payment or Magic Coffee collection is required in Phase 1.

---

# Phase 1 Navigation Candidate

Primary:

- Map
- Coffee Shops
- Meets
- My Meets
- Profile

Secondary / contextual:

- Coffee Shop
- Meet
- Meet Mutate
- Menu
- For Coffee Shops
- For Baristas
- Barista Profile
- Sign
- Settings

---

# Out of Scope for Phase 1

- Generic people directory
- Direct messaging/chat
- In-app payments
- In-app coffee ordering
- Ratings/reputation
- Complex check-in system
- Coffee shop owner dashboard
- Barista operational dashboard
- Coffee shop-created official events as a special role
- User-created custom interests
- Separate meet occurrence entity
- Separate connection entity
- Separate Magic Coffee entity
