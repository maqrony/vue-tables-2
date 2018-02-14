/** Declaration file generated by dts-gen */

export = vue_tables_2;

declare const vue_tables_2: {
    ClientTable: {
        install: any;
    };
    Event: {
        $attrs: {
        };
        $children: any[];
        $createElement: any;
        $data: {
        };
        $delete: any;
        $destroy: any;
        $emit: any;
        $forceUpdate: any;
        $isServer: boolean;
        $listeners: {
        };
        $mount: any;
        $nextTick: any;
        $off: any;
        $on: any;
        $once: any;
        $options: {
            components: {
                KeepAlive: {
                    abstract: boolean;
                    created: any;
                    destroyed: any;
                    name: string;
                    props: {
                        exclude: any[];
                        include: any[];
                        max: any[];
                    };
                    render: any;
                    watch: {
                        exclude: any;
                        include: any;
                    };
                };
                Transition: {
                    abstract: boolean;
                    name: string;
                    props: {
                        appear: any;
                        appearActiveClass: any;
                        appearClass: any;
                        appearToClass: any;
                        css: any;
                        duration: any[];
                        enterActiveClass: any;
                        enterClass: any;
                        enterToClass: any;
                        leaveActiveClass: any;
                        leaveClass: any;
                        leaveToClass: any;
                        mode: any;
                        name: any;
                        type: any;
                    };
                    render: any;
                };
                TransitionGroup: {
                    beforeUpdate: any;
                    methods: {
                        hasMove: any;
                    };
                    props: {
                        appear: any;
                        appearActiveClass: any;
                        appearClass: any;
                        appearToClass: any;
                        css: any;
                        duration: any[];
                        enterActiveClass: any;
                        enterClass: any;
                        enterToClass: any;
                        leaveActiveClass: any;
                        leaveClass: any;
                        leaveToClass: any;
                        moveClass: any;
                        name: any;
                        tag: any;
                        type: any;
                    };
                    render: any;
                    updated: any;
                };
            };
            directives: {
                model: {
                    componentUpdated: any;
                    inserted: any;
                };
                show: {
                    bind: any;
                    unbind: any;
                    update: any;
                };
            };
            filters: {
            };
        };
        $parent: any;
        $props: any;
        $refs: {
        };
        $root: any;
        $scopedSlots: {
        };
        $set: any;
        $slots: {
        };
        $ssrContext: any;
        $vnode: any;
        $watch: any;
    };
    ServerTable: {
        install: any;
    };
};

