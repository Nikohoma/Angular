import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Signal';
  searchEmp = signal('');
  emps = signal(['sam', 'amit', 'neha', 'deep', 'shyam', 'ram']);
  filteredEmps = computed(
    () => this.emps().filter(e => e.toLowerCase().includes(this.searchEmp().toLowerCase()))
  );
  updateSearch(event: any) {
    this.searchEmp.set(event.target.value);
  }
}
