warning: in the working copy of 'src/routeTree.gen.ts', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/src/routeTree.gen.ts b/src/routeTree.gen.ts[m
[1mindex 3169001..9a14cac 100644[m
[1m--- a/src/routeTree.gen.ts[m
[1m+++ b/src/routeTree.gen.ts[m
[36m@@ -19,6 +19,7 @@[m [mimport { Route as CubaRouteImport } from './routes/cuba'[m
 import { Route as EnergyRouteImport } from './routes/energy'[m
 import { Route as FarmersRouteImport } from './routes/farmers'[m
 import { Route as FoodForFamiliesRouteImport } from './routes/food-for-families'[m
[32m+[m[32mimport { Route as HealthzRouteImport } from './routes/healthz'[m
 import { Route as LandRouteImport } from './routes/land'[m
 import { Route as MissionRouteImport } from './routes/mission'[m
 import { Route as NeedsRouteImport } from './routes/needs'[m
[36m@@ -88,6 +89,11 @@[m [mconst FoodForFamiliesRoute = FoodForFamiliesRouteImport.update({[m
   path: '/food-for-families',[m
   getParentRoute: () => rootRouteImport,[m
 } as any)[m
[32m+[m[32mconst HealthzRoute = HealthzRouteImport.update({[m
[32m+[m[32m  id: '/healthz',[m
[32m+[m[32m  path: '/healthz',[m
[32m+[m[32m  getParentRoute: () => rootRouteImport,[m
[32m+[m[32m} as any)[m
 const LandRoute = LandRouteImport.update({[m
   id: '/land',[m
   path: '/land',[m
[36m@@ -190,6 +196,7 @@[m [mexport interface FileRoutesByFullPath {[m
   '/energy': typeof EnergyRoute[m
   '/farmers': typeof FarmersRoute[m
   '/food-for-families': typeof FoodForFamiliesRoute[m
[32m+[m[32m  '/healthz': typeof HealthzRoute[m
   '/land': typeof LandRoute[m
   '/mission': typeof MissionRoute[m
   '/needs': typeof NeedsRoute[m
[36m@@ -220,6 +227,7 @@[m [mexport interface FileRoutesByTo {[m
   '/energy': typeof EnergyRoute[m
   '/farmers': typeof FarmersRoute[m
   '/food-for-families': typeof FoodForFamiliesRoute[m
[32m+[m[32m  '/healthz': typeof HealthzRoute[m
   '/land': typeof LandRoute[m
   '/mission': typeof MissionRoute[m
   '/needs': typeof NeedsRoute[m
[36m@@ -251,6 +259,7 @@[m [mexport interface FileRoutesById {[m
   '/energy': typeof EnergyRoute[m
   '/farmers': typeof FarmersRoute[m
   '/food-for-families': typeof FoodForFamiliesRoute[m
[32m+[m[32m  '/healthz': typeof HealthzRoute[m
   '/land': typeof LandRoute[m
   '/mission': typeof MissionRoute[m
   '/needs': typeof NeedsRoute[m
[36m@@ -283,6 +292,7 @@[m [mexport interface FileRouteTypes {[m
     | '/energy'[m
     | '/farmers'[m
     | '/food-for-families'[m
[32m+[m[32m    | '/healthz'[m
     | '/land'[m
     | '/mission'[m
     | '/needs'[m
[36m@@ -313,6 +323,7 @@[m [mexport interface FileRouteTypes {[m
     | '/energy'[m
     | '/farmers'[m
     | '/food-for-families'[m
[32m+[m[32m    | '/healthz'[m
     | '/land'[m
     | '/mission'[m
     | '/needs'[m
[36m@@ -343,6 +354,7 @@[m [mexport interface FileRouteTypes {[m
     | '/energy'[m
     | '/farmers'[m
     | '/food-for-families'[m
[32m+[m[32m    | '/healthz'[m
     | '/land'[m
     | '/mission'[m
     | '/needs'[m
[36m@@ -374,6 +386,7 @@[m [mexport interface RootRouteChildren {[m
   EnergyRoute: typeof EnergyRoute[m
   FarmersRoute: typeof FarmersRoute[m
   FoodForFamiliesRoute: typeof FoodForFamiliesRoute[m
[32m+[m[32m  HealthzRoute: typeof HealthzRoute[m
   LandRoute: typeof LandRoute[m
   MissionRoute: typeof MissionRoute[m
   NeedsRoute: typeof NeedsRoute[m
[36m@@ -466,6 +479,13 @@[m [mdeclare module '@tanstack/react-router' {[m
       preLoaderRoute: typeof FoodForFamiliesRouteImport[m
       parentRoute: typeof rootRouteImport[m
     }[m
[32m+[m[32m    '/healthz': {[m
[32m+[m[32m      id: '/healthz'[m
[32m+[m[32m      path: '/healthz'[m
[32m+[m[32m      fullPath: '/healthz'[m
[32m+[m[32m      preLoaderRoute: typeof HealthzRouteImport[m
[32m+[m[32m      parentRoute: typeof rootRouteImport[m
[32m+[m[32m    }[m
     '/land': {[m
       id: '/land'[m
       path: '/land'[m
[36m@@ -606,6 +626,7 @@[m [mconst rootRouteChildren: RootRouteChildren = {[m
   EnergyRoute: EnergyRoute,[m
   FarmersRoute: FarmersRoute,[m
   FoodForFamiliesRoute: FoodForFamiliesRoute,[m
[32m+[m[32m  HealthzRoute: HealthzRoute,[m
   LandRoute: LandRoute,[m
   MissionRoute: MissionRoute,[m
   NeedsRoute: NeedsRoute,[m
