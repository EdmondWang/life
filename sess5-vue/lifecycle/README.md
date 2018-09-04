# VUE Component Life Cycle

Read options to vm.$options

> vm.$options = Object.create(vm.constructor.options);


Init Life Cycle

> vm.$parent = parent;

> vm.$root = parent ? parent.$root : vm;

> vm.$children = [];

> vm.$refs = {};

Init Event and init parent attached events

> vm._events = Object.create(null);

Init Render

> vm._vnode = null; // the root of the child tree

> vm._staticTrees = null; // v-once cached trees

> resolveSlots

**beforeCreate()**

initInjections(vm);

initState(vm);

initProvide(vm);

**created()**






