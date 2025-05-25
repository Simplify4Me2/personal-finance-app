import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BudgetComponent } from './budget/budget.component';
import { PotsComponent } from './pots/pots.component';
import { RecurringBillsComponent } from './recurring-bills/recurring-bills.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'budget', component: BudgetComponent },
    { path: 'pots', component: PotsComponent },
    { path: 'recurring-bills', component: RecurringBillsComponent },
];
