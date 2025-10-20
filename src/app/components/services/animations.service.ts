import { Injectable } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  // Fade in animation
  fadeIn = trigger('fadeIn', [
    state('in', style({ opacity: 1 })),
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms ease-in')
    ])
  ]);

  // Fade in up animation
  fadeInUp = trigger('fadeInUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);

  // Slide in left animation
  slideInLeft = trigger('slideInLeft', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-50px)' }),
      animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ]);

  // Slide in right animation
  slideInRight = trigger('slideInRight', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(50px)' }),
      animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ]);

  // Card hover animation
  cardHover = trigger('cardHover', [
    state('normal', style({
      transform: 'scale(1)'
    })),
    state('hover', style({
      transform: 'scale(1.03)'
    })),
    transition('normal <=> hover', animate('200ms ease-in-out'))
  ]);

  // Button hover animation
  buttonHover = trigger('buttonHover', [
    state('normal', style({
      transform: 'translateY(0)'
    })),
    state('hover', style({
      transform: 'translateY(-3px)'
    })),
    transition('normal <=> hover', animate('200ms ease-in-out'))
  ]);
}