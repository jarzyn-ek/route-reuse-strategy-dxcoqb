import {
  RouteReuseStrategy,
  DetachedRouteHandle,
  ActivatedRouteSnapshot,
} from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // console.log(`shouldDetach: ${route.routeConfig?.path}`);
    return route.routeConfig.path === 'inventory';
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // console.log(`store: ${route.routeConfig?.path}`);
    this.storedRoutes.set(route.routeConfig.path, handle);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return (
      !!route.routeConfig && !!this.storedRoutes.get(route.routeConfig.path)
    );
    // console.log(`shouldAttach: ${route.routeConfig?.path}`);
    // return (
    //   route.routeConfig?.path === 'inventory' &&
    //   !!this.storedRoutes.get(route.routeConfig.path)
    // );
    // return false;
    // return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    // console.log(`retrieve: ${route.routeConfig?.path}`);
    return this.storedRoutes.get(route.routeConfig.path);
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    // console.log("")
    // console.log(future.firstChild?.routeConfig);
    // console.log(curr.firstChild?.routeConfig);
    // // console.log(`Future: ${future}`);
    // // console.log(`Curr: ${curr.fragment}`);
    // return true;
    return future.routeConfig === curr.routeConfig;
  }
}
