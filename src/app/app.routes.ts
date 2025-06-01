import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { BudgetComponent } from './features/budget/budget.component';
import { PotsComponent } from './features/pots/pots.component';
import { RecurringBillsComponent } from './features/recurring-bills/recurring-bills.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'budget', component: BudgetComponent },
    { path: 'pots', component: PotsComponent },
    { path: 'recurring-bills', component: RecurringBillsComponent },
];
