# Fleet Vehicle Usage Details Page - Implementation Plan

## Overview

This document outlines the phased implementation plan for the Fleet Vehicle Usage Details page. The page will track vehicle usage in a fleet management dashboard, displaying stats, usage trends, and a comprehensive vehicle list.

## Page Layout

```
┌─────────────────────────────────────────────────────┐
│  Fleet Vehicle Usage (title)                        │
├─────────────────────────────────────────────────────┤
│  ┌───────────┐  ┌───────────┐  ┌───────────┐      │
│  │ Active    │  │ Fuel/     │  │ Utiliz.   │      │
│  │ Vehicles  │  │ Energy    │  │ Rate      │      │
│  │ 18/20     │  │ $2,340    │  │ 67.3%     │      │
│  │ +2 ↑      │  │ +5.2% ↑   │  │ -1.4% ↓   │      │
│  └───────────┘  └───────────┘  └───────────┘      │
├─────────────────────────────────────────────────────┤
│  Daily Fleet Mileage (30 days)                     │
│  [═══════ Line Chart ══════════════════════]       │
├─────────────────────────────────────────────────────┤
│  Vehicle Fleet List (sorted by miles)              │
│  ┌────────────────────────────────────────────┐   │
│  │ Model | License | Driver | Miles | Status │   │
│  ├────────────────────────────────────────────┤   │
│  │ ...vehicle rows...                         │   │
│  └────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

## Key Features

- **Stats Cards**: Display Active Vehicles, Fuel/Energy Costs, and Utilization Rate with trend indicators
- **Usage Chart**: Line chart showing daily fleet mileage over the last 30 days
- **Vehicle List**: Sortable table of all vehicles with driver info, sorted by most used
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Dark Mode Support**: All components support dark mode

## Data Specifications

### Vehicles

- **Total Count**: 20 vehicles
- **Makes**: Toyota, Ford, Honda, Chevrolet, BMW, Tesla
- **Types**: Sedans, trucks, SUVs
- **License Plates**: Format "ABC-1234" (randomized)
- **Mileage Range**: 2,000 - 45,000 miles (diverse usage patterns)
- **Status Distribution**:
  - Active: ~18 vehicles
  - Maintenance: ~1 vehicle
  - Inactive: ~1 vehicle

### Usage Data

- **Time Range**: Last 30 days
- **Daily Totals**: 800-2,500 miles/day (realistic fleet totals)
- **Metric**: Miles driven per day

### Stats

- **Active Vehicles**: 18/20 (+2 change)
- **Fuel/Energy Costs**: $2,340 (+5.2% change)
- **Utilization Rate**: 67.3% (-1.4% change)

---

## Implementation Phases

### Phase 1: Data Layer Foundation

**Goal**: Set up data structures and generate fake fleet data  
**Scope**: Backend/data only, no UI changes visible to users

#### Files to Create/Modify

- `src/data/schema.ts` - Add type definitions
- `src/data/fleet-data.ts` - Create with fake data

#### Type Definitions

```typescript
// Vehicle type
export type Vehicle = {
  id: string
  make: string
  model: string
  licensePlate: string
  driver: {
    name: string
    email: string
    phone: string
  }
  totalMiles: number
  status: "active" | "maintenance" | "inactive"
}

// Daily usage data
export type FleetUsageData = {
  date: string
  totalMiles: number
}

// Fleet statistics
export type FleetStats = {
  activeVehicles: number
  totalVehicles: number
  vehicleChange: number
  fuelCosts: number
  fuelChangePercent: number
  utilizationRate: number
  utilizationChangePercent: number
}
```

#### Data Generation Requirements

- 20 vehicles with realistic make/model combinations
- Unique license plates (ABC-1234 format)
- Driver information with name, email, phone
- Total mileage ranging from 2,000 to 45,000
- 30 days of daily usage data
- Fleet statistics with trend data

**PR Size**: Small (~200 lines)  
**Commits**: 1 commit  
**Dependencies**: None

---

### Phase 2: Stats Cards Component

**Goal**: Add the 3 KPI stat cards at the top of the details page  
**Scope**: Stats section only - chart and table remain as placeholders

#### Files to Create/Modify

- `src/components/ui/details/FleetStatsCards.tsx` - New component
- `src/app/(main)/details/page.tsx` - Add stats section

#### Component Structure

**FleetStatsCards.tsx**

- Grid layout: 3 columns (desktop), 1 column (mobile)
- Each card displays:
  - Title (e.g., "Active Vehicles")
  - Main value (e.g., "18/20" or "$2,340" or "67.3%")
  - Trend badge with color coding
  - Arrow icon (↑/↓ based on positive/negative change)
- Uses existing `Badge` component
- Follows styling pattern from `ProgressBarCard`

#### Props Interface

```typescript
{
  activeVehicles: number
  totalVehicles: number
  vehicleChange: number
  fuelCosts: number
  fuelChangePercent: number
  utilizationRate: number
  utilizationChangePercent: number
}
```

#### Styling

- Success badge (green): Positive trends
- Error badge (red): Negative trends
- Neutral badge (gray): No change
- Consistent spacing with overview page

**PR Size**: Small (~150 lines)  
**Commits**: 1 commit  
**Dependencies**: Phase 1

---

### Phase 3: Daily Usage Chart

**Goal**: Add the line chart showing daily mileage  
**Scope**: Chart component displaying 30 days of usage data

#### Files to Create/Modify

- `src/components/ui/details/FleetUsageChart.tsx` - New component
- `src/app/(main)/details/page.tsx` - Add chart section

#### Component Structure

**FleetUsageChart.tsx**

- Reuses existing `LineChart` component from `@/components/LineChart`
- Single line chart (no comparison)
- X-axis: Last 30 days (formatted dates)
- Y-axis: Total miles (with auto-scaling)
- Shows tooltips on hover
- Card wrapper with title and description

#### Features

- Title: "Daily Fleet Mileage"
- Subtitle/Description: "Total miles driven across all vehicles"
- Responsive height
- Dark mode support
- Smooth animations

#### Props Interface

```typescript
{
  data: FleetUsageData[]
}
```

#### Implementation Pattern

- Similar to `ChartCard` from overview page
- Simplified (no period comparison needed)
- Uses date-fns for date formatting
- Value formatter for miles display

**PR Size**: Small (~120 lines)  
**Commits**: 1 commit  
**Dependencies**: Phase 1

---

### Phase 4: Vehicle List Table & Final Integration

**Goal**: Complete the page with vehicle list table  
**Scope**: Table component + final page layout + remove all placeholders

#### Files to Create/Modify

- `src/components/ui/details/VehicleListTable.tsx` - New component
- `src/app/(main)/details/page.tsx` - Add vehicle list, finalize layout

#### Component Structure

**VehicleListTable.tsx**

**Table Columns**:

1. **Make/Model** - e.g., "Toyota Camry"
2. **License Plate** - e.g., "ABC-1234"
3. **Driver Name** - e.g., "John Doe"
4. **Driver Contact** - Email (phone as secondary line on mobile)
5. **Total Miles** - e.g., "34,521 mi"
6. **Status** - Badge (Active/Maintenance/Inactive)

**Features**:

- Pre-sorted by total miles (descending) - most used vehicles first
- Responsive table layout
- Follows pattern from `ActiveUsersContent.tsx`
- Card wrapper with rounded borders
- Alternating row colors for readability

#### Props Interface

```typescript
{
  vehicles: Vehicle[]
}
```

#### Status Badge Variants

- **Active**: Success variant (green)
- **Maintenance**: Warning variant (yellow)
- **Inactive**: Neutral variant (gray)

#### Responsive Behavior

- Desktop: Full table layout
- Mobile: Stacked card layout with key information

**Final Page Structure** (page.tsx):

```tsx
export default function DetailsPage() {
  return (
    <>
      <h1>Fleet Vehicle Usage</h1>

      {/* Stats Section */}
      <div className="mt-4 sm:mt-6">
        <FleetStatsCards {...fleetStats} />
      </div>

      {/* Chart Section */}
      <section className="mt-8 sm:mt-10">
        <FleetUsageChart data={fleetUsageData} />
      </section>

      {/* Vehicle List */}
      <section className="mt-8 sm:mt-10">
        <VehicleListTable vehicles={vehicles} />
      </section>
    </>
  )
}
```

**PR Size**: Medium (~250 lines)  
**Commits**: 1 commit  
**Dependencies**: Phase 1

---

## Design Decisions

### Styling & Consistency

- **Color Scheme**: Follows existing dashboard palette
- **Dark Mode**: All components support dark mode
- **Typography**: Consistent with overview page (text-lg for h1, text-xl for values)
- **Spacing**: Mobile-first with responsive breakpoints (sm:, lg:)
- **Borders**: Gray-200 (light) / Gray-800 (dark)

### Component Reuse

- `Badge` - For status and trend indicators
- `LineChart` - For usage chart
- Table structure - Pattern from `ActiveUsersContent.tsx`
- Layout spacing - Pattern from `overview/page.tsx`

### Data Format

- **Miles**: Display as "mi" suffix
- **Currency**: USD with $ prefix (e.g., "$2,340")
- **Percentages**: One decimal place (e.g., "67.3%")
- **Phone**: Format "(555) 123-4567"
- **Dates**: Format "MM/DD/YYYY" in chart tooltips

---

## Benefits of Phased Approach

1. **Incremental Value**: Each phase adds visible functionality
2. **Easier Reviews**: Smaller, focused PRs (150-250 lines each)
3. **Parallel Work Possible**: After Phase 1, Phases 2-4 could be developed in parallel
4. **Easy Rollback**: Issues isolated to specific phases
5. **Clear Progress**: Visual progression from stats → chart → table
6. **Better Testing**: Each component can be tested independently

---

## Technical Notes

### Dependencies

All phases depend on Phase 1 (data layer). Phases 2, 3, and 4 are independent of each other after Phase 1 is complete.

### Testing Considerations

- Verify responsive behavior on mobile/tablet/desktop
- Test dark mode for all components
- Ensure sorting works correctly (by miles, descending)
- Validate trend indicators display correctly (positive/negative)
- Check chart tooltips and interactions

### Future Enhancements (Out of Scope)

- Real-time data updates
- Filtering by vehicle status
- Search functionality
- Export to CSV
- Date range picker for chart
- Drill-down to individual vehicle details
- Sorting by other columns (not just miles)

---

## Questions for Team/PM

1. **Phone number format**: Confirm "(555) 123-4567" format is acceptable?
2. **Miles vs Kilometers**: Should we support both units or just miles?
3. **Chart date range**: Should "Last 30 Days" be configurable or fixed?
4. **Vehicle actions**: Do we need edit/delete actions on the vehicle list?
5. **Maintenance alerts**: Should vehicles in maintenance have special highlighting?
6. **Fuel cost calculation**: Is the fuel cost value final or placeholder? (Do we need actual calculation logic?)

---

## Timeline Estimate

- **Phase 1**: 1-2 hours (data layer)
- **Phase 2**: 2-3 hours (stats cards)
- **Phase 3**: 2-3 hours (usage chart)
- **Phase 4**: 3-4 hours (vehicle table + integration)

**Total**: ~8-12 hours across all phases

---

## Approval & Sign-off

- [ ] PM Review
- [ ] Design Review
- [ ] Tech Lead Review
- [ ] Ready for Implementation

---

_Document Version: 1.0_  
_Last Updated: {{date}}_  
_Author: Development Team_
