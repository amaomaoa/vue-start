import { defineComponent, ref, toRefs } from "vue";

const SayHello = defineComponent({
    props: {
        name: {
            type: String,
            default: "Li Ming",
        },
        modelValue: {
            type: Number,
            default: 0,
        },
    },
    emits: {
        "update:modelValue": (v: number | undefined) => true,
    },
    setup: (props, { emit, slots }) => {
        const { modelValue } = toRefs(props);
        return () => (
            <div>
                <p>hello, {props.name}</p>
                <button
                    onClick={() =>
                        emit(
                            "update:modelValue",
                            modelValue.value && modelValue.value + 1
                        )
                    }
                >
                    count: {modelValue.value}
                </button>
                {(slots["default"] && slots["default"]()) || (
                    <div>default slots</div>
                )}
            </div>
        );
    },
});

export { SayHello };
