import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { RegisteredService } from '../services/registered-service';

// route: ActivatedRouteSnapshot - Contains information about the route being activated
// state: RouterStateSnapshot - Contains the router's current state

export const rEGISTEREDACCESSGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const registered = inject(RegisteredService); // Inject the RegisteredService to check if the user is registered
  return true;
};
