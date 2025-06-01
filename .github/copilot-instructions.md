# GitHub Copilot Instructions for Personal Finance App

## Project Overview
This is an Angular 19 personal finance application that helps users track their expenses, manage budgets, and visualize financial data.

## Tech Stack
- Angular 19
- TypeScript 5.4+
- Chart.js for visualizations
- NgRx for state management

## Project Structure
- `src/app/components/` - Reusable UI components
- `src/app/features/` - Feature modules (dashboard, transactions, budgets, etc.)
- `src/app/core/` - Core services, guards, and interceptors
- `src/app/shared/` - Shared modules, interfaces, and utilities

## Coding Standards
- Use Angular best practices and style guide
- Implement lazy loading for feature modules
- Follow SOLID principles
- Use TypeScript strict mode
- Implement proper error handling
- Write unit tests for components and services

## Common Tasks
When suggesting code, please:
- Use SASS for styling the UI
- Implement reactive forms with proper validation
- Follow container/presenter pattern
- Use NgRx for state management
- Add proper type definitions
- Include unit tests
- Follow proper folder structure

## Examples

### Component Structure
```typescript
@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  template: `<div>Feature Component</div>`
})
export class FeatureComponent {
  // Component logic
}
```

### Service Pattern
```typescript
@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  constructor(private http: HttpClient) {}

  // Service methods
}
```

### State Management
```typescript
// Actions
export const loadData = createAction('[Feature] Load Data');

// Reducer
export const featureReducer = createReducer(
  initialState,
  on(loadData, (state) => ({ ...state, loading: true }))
);
```

## Testing Guidelines
- Write unit tests for components, services, and effects
- Mock dependencies appropriately