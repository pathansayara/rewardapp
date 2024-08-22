import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  searchTerm: string = '';
  sortOrder: string | null = null;
  selectedSortOrder: string | null = null;

  items = [
    {
      name: 'Cow XYZ $10 (Demo)',
      points: 40,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2024-07-23',
      display_img_url: 'assets/happy-cow.jpg'
    },
    {
      name: 'Grab $10',
      points: 150,
      quantity: 0,
      low_quantity: 5,
      valid_until: '2024-12-31',
      display_img_url: 'assets/grab.jpg'
    },
    {
      name: 'Demo reward for Purchase Price',
      points: 200,
      quantity: 3,
      low_quantity: 5,
      valid_until: '2024-11-30',
      display_img_url: 'assets/PalFish-reward-stars.png'
    },
    {
      name: 'E- Voucher',
      points: 50,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2025-11-10',
      display_img_url: 'assets/e-voucher.webp'
    },
    {
      name: 'Fashion retail',
      points: 100,
      quantity: 0,
      low_quantity: 5,
      valid_until: '2025-11-20',
      display_img_url: 'assets/retail-small_Small.jpg'
    },
    {
      name: 'New fasion retailer',
      points: 100,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2024-10-04',
      display_img_url: 'assets/new-fasion.jpg'
    },
    {
      name: 'Brand fasion',
      points: 100,
      quantity: 3,
      low_quantity: 5,
      valid_until: '2024-02-03',
      display_img_url: 'assets/fashion-brands.webp'
    },
    {
      name: 'Nurserylive',
      points: 100,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2024-08-01',
      display_img_url: 'assets/nusrerylive.jpeg'
    },
    {
      name: 'Evergreen',
      points: 100,
      quantity: 0,
      low_quantity: 5,
      valid_until: '2024-07-05',
      display_img_url: 'assets/evergreen.png'
    },
    {
      name: 'Statergy Evergreen',
      points: 100,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2024-02-15',
      display_img_url: 'assets/statergy-evergreen.png'
    },
    {
      name: 'Dairy Farm $10 (Demo)',
      points: 40,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2024-07-23',
      display_img_url: 'assets/happy-cow.jpg'
    },
    {
      name: 'Zoo $10',
      points: 150,
      quantity: 0,
      low_quantity: 5,
      valid_until: '2024-12-31',
      display_img_url: 'assets/grab.jpg'
    },
    {
      name: 'Reward Demo Purchase',
      points: 200,
      quantity: 3,
      low_quantity: 5,
      valid_until: '2024-11-30',
      display_img_url: 'assets/PalFish-reward-stars.png'
    },
    {
      name: 'Woo-VCD',
      points: 50,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2025-11-10',
      display_img_url: 'assets/e-voucher.webp'
    },
    {
      name: 'Dress guarented',
      points: 100,
      quantity: 0,
      low_quantity: 5,
      valid_until: '2025-11-20',
      display_img_url: 'assets/retail-small_Small.jpg'
    },
    {
      name: 'Everything is passion',
      points: 100,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2024-10-04',
      display_img_url: 'assets/new-fasion.jpg'
    },
    {
      name: 'Highly branded',
      points: 100,
      quantity: 3,
      low_quantity: 5,
      valid_until: '2024-02-03',
      display_img_url: 'assets/fashion-brands.webp'
    },
    {
      name: 'Green Plants',
      points: 100,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2024-08-01',
      display_img_url: 'assets/nusrerylive.jpeg'
    },
    {
      name: 'These is Green stock',
      points: 100,
      quantity: 0,
      low_quantity: 5,
      valid_until: '2024-07-05',
      display_img_url: 'assets/evergreen.png'
    },
    {
      name: 'Planted Stock',
      points: 100,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2024-02-15',
      display_img_url: 'assets/statergy-evergreen.png'
    },
    {
      name: 'Dove black/white',
      points: 100,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2024-07-18',
      display_img_url: 'assets/dove.jpg'
    },
    {
      name: 'Beuaty Product',
      points: 100,
      quantity: 10,
      low_quantity: 5,
      valid_until: '2024-02-15',
      display_img_url: 'assets/beuaty.jpg'
    },
    {
      name: 'Shampoo',
      points: 100,
      quantity: 3,
      low_quantity: 5,
      valid_until: '2024-02-15',
      display_img_url: 'assets/shampoo.jpg'
    }


  
  ];

// Filter the Items

  get filteredItems() {
    let filtered = this.items.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    if (this.sortOrder) {
      return this.sortOrder === 'asc' ? filtered.sort((a, b) => a.name.localeCompare(b.name)) : filtered.sort((a, b) => b.name.localeCompare(a.name));
    }
    return filtered;
  }

  selectSort(order: string) {
    this.selectedSortOrder = order; // Store the selected sort order temporarily
  }

  applySort() {
    // Apply the selected sort order when the "Apply" button is clicked
    if (this.selectedSortOrder) {
      this.sortOrder = this.selectedSortOrder;
    }
    
    // Close the offcanvas
    const offcanvasElement = document.getElementById('sortOffcanvas');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvas?.hide();
  }

  resetAll() {
    this.sortOrder = null;
    this.selectedSortOrder = null; // Reset the temporary sort order as well
    this.searchTerm = '';
  }

// Clear the filter

  clearFilters() {
    this.searchTerm = '';
    this.sortOrder = null;
    this.selectedSortOrder = null;
  }
  
}
