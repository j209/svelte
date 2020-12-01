/* Home.svelte generated by Svelte v__VERSION__ */
import {
	SvelteComponent,
	action_destroyer,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "https://esm.sh/svelte/internal";

function create_fragment(ctx) {
	let a;
	let link_action;
	let t1;
	let p;
	let t2;
	let t3;
	let mounted;
	let dispose;

	return {
		c() {
			a = element("a");
			a.textContent = "Test";
			t1 = space();
			p = element("p");
			t2 = text("Svelte ");
			t3 = text(/*environment*/ ctx[0]);
			attr(a, "href", "#");
		},
		m(target, anchor) {
			insert(target, a, anchor);
			insert(target, t1, anchor);
			insert(target, p, anchor);
			append(p, t2);
			append(p, t3);

			if (!mounted) {
				dispose = action_destroyer(link_action = link.call(null, a));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*environment*/ 1) set_data(t3, /*environment*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(a);
			if (detaching) detach(t1);
			if (detaching) detach(p);
			mounted = false;
			dispose();
		}
	};
}

function link(node) {
	function onClick(event) {
		event.preventDefault();
		history.pushState(null, null, event.target.href);
	}

	node.addEventListener("click", onClick);

	return {
		destroy() {
			node.removeEventListener("click", onClick);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { environment = "Deno" } = $$props;

	setInterval(
		() => {
			$$invalidate(0, environment = environment == "Deno" ? "Browser" : "Deno");
		},
		500
	);

	$$self.$$set = $$props => {
		if ("environment" in $$props) $$invalidate(0, environment = $$props.environment);
	};

	return [environment];
}

class Example extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { environment: 0 });
	}
}

export default Example;