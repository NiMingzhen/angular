"use strict";
require('rxjs/add/operator/map');
var forkJoin_1 = require('rxjs/observable/forkJoin');
var fromPromise_1 = require('rxjs/observable/fromPromise');
require('rxjs/add/operator/toPromise');
function resolve(resolver, state) {
    return resolveNode(resolver, state._root).map(function (_) { return state; });
}
exports.resolve = resolve;
function resolveNode(resolver, node) {
    if (node.children.length === 0) {
        return fromPromise_1.fromPromise(resolver.resolveComponent(node.value.component).then(function (factory) {
            node.value._resolvedComponentFactory = factory;
            return node.value;
        }));
    }
    else {
        var c = node.children.map(function (c) { return resolveNode(resolver, c).toPromise(); });
        return forkJoin_1.forkJoin(c).map(function (_) { return resolver.resolveComponent(node.value.component).then(function (factory) {
            node.value._resolvedComponentFactory = factory;
            return node.value;
        }); });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IseUJBQXVCLDBCQUEwQixDQUFDLENBQUE7QUFDbEQsNEJBQTBCLDZCQUE2QixDQUFDLENBQUE7QUFDeEQsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBRXJDLGlCQUF3QixRQUEyQixFQUFFLEtBQTBCO0lBQzdFLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUZlLGVBQU8sVUFFdEIsQ0FBQTtBQUVELHFCQUFxQixRQUEyQixFQUFFLElBQXNDO0lBQ3RGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLHlCQUFXLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLE9BQU8sQ0FBQztZQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRU4sQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFwQyxDQUFvQyxDQUFDLENBQUM7UUFDdkUsTUFBTSxDQUFDLG1CQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUMzRixJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLE9BQU8sQ0FBQztZQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDLENBQUMsRUFIMEIsQ0FHMUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnLi9yb3V0ZXJfc3RhdGUnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuL3V0aWxzL3RyZWUnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVzb2x2ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtmb3JrSm9pbn0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2ZvcmtKb2luJztcbmltcG9ydCB7ZnJvbVByb21pc2V9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKHJlc29sdmVyOiBDb21wb25lbnRSZXNvbHZlciwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgcmV0dXJuIHJlc29sdmVOb2RlKHJlc29sdmVyLCBzdGF0ZS5fcm9vdCkubWFwKF8gPT4gc3RhdGUpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTm9kZShyZXNvbHZlcjogQ29tcG9uZW50UmVzb2x2ZXIsIG5vZGU6IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZyb21Qcm9taXNlKHJlc29sdmVyLnJlc29sdmVDb21wb25lbnQoPGFueT5ub2RlLnZhbHVlLmNvbXBvbmVudCkudGhlbihmYWN0b3J5ID0+IHtcbiAgICAgIG5vZGUudmFsdWUuX3Jlc29sdmVkQ29tcG9uZW50RmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgICByZXR1cm4gbm9kZS52YWx1ZTtcbiAgICB9KSk7XG4gICAgXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYyA9IG5vZGUuY2hpbGRyZW4ubWFwKGMgPT4gcmVzb2x2ZU5vZGUocmVzb2x2ZXIsIGMpLnRvUHJvbWlzZSgpKTtcbiAgICByZXR1cm4gZm9ya0pvaW4oYykubWFwKF8gPT4gcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudCg8YW55Pm5vZGUudmFsdWUuY29tcG9uZW50KS50aGVuKGZhY3RvcnkgPT4ge1xuICAgICAgbm9kZS52YWx1ZS5fcmVzb2x2ZWRDb21wb25lbnRGYWN0b3J5ID0gZmFjdG9yeTtcbiAgICAgIHJldHVybiBub2RlLnZhbHVlO1xuICAgIH0pKTtcbiAgfVxufSJdfQ==