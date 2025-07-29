import { Component } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation';
@Component({
  selector: 'app-reservation-list',
  standalone: false,
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css'
})
export class ReservationList {
  reservations: Reservation[] = [];
  constructor(private reservationService: ReservationService) {
    
  }
  ngOnInit() {
    this.reservations = this.reservationService.getReservations();
  }
  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id)
  }
}
