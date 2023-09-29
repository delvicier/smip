import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";

export const guardianGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  if (localStorage.getItem('token')) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
