import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  let etat = localStorage.getItem("etat");
  const router = inject(Router);
  if(etat=="connected"){
    return true;
  }
  else{
    return false;
  }
};
