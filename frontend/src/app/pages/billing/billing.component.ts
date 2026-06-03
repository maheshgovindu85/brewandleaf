import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Product, Order, OrderItem } from '../../models/brew-and-leaf.models';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  products: Product[] = [];
  cart: OrderItem[] = [];
  customerName = '';
  customerEmail = '';
  discount = 0;
  today = new Date();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(data => this.products = data);
  }

  addToCart(product: Product): void {
    const existing = this.cart.find(item => item.product_id === product.id);
    if (existing) {
      existing.quantity++;
      existing.total_price = existing.quantity * existing.unit_price;
    } else {
      this.cart.push({
        product_id: product.id!,
        name: product.name,
        quantity: 1,
        unit_price: product.price,
        total_price: product.price
      });
    }
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
  }

  get subtotal(): number {
    return this.cart.reduce((sum, item) => sum + item.total_price, 0);
  }

  get total(): number {
    return this.subtotal - this.discount;
  }

  generateInvoice(): void {
    const order: Order = {
      customer_name: this.customerName,
      customer_email: this.customerEmail,
      items: this.cart,
      total_amount: this.subtotal,
      discount_applied: this.discount,
      final_amount: this.total
    };

    this.apiService.createOrder(order).subscribe(res => {
      alert('Order created! Generating PDF...');
      this.downloadPDF();
      this.resetBilling();
    });
  }

  downloadPDF(): void {
    const data = document.getElementById('invoice-content')!;
    html2canvas(data).then((canvas: HTMLCanvasElement) => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`invoice_${Date.now()}.pdf`);
    });
  }

  resetBilling(): void {
    this.cart = [];
    this.customerName = '';
    this.customerEmail = '';
    this.discount = 0;
  }
}
