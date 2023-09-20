import m from 'mithril'

new EventSource('/esbuild').addEventListener('change', () => location.reload())

const root = document.body

let count = 0
const increment = function () {
    count++
}

const App = {

    view: function () {
        return m("span.bg-gray-700.min-h-screen.flex.flex-col.justify-center.items-center.gap-2.text-white.font-sans.font-bold", {
            class: "sm:bg-blue-400 sm:flex sm:flex-row sm:text-black md:bg-green-400 md:flex md:flex-col md:text-white lg:bg-orange-400 lg:flex lg:flex-row lg:text-black xl:bg-violet-400 xl:flex xl:flex-col xl:text-white 2xl:bg-black "
        }, [
            m("h1.text-center.text-2xl", "My first app"),
            m("button.flex.justify-center.items-center.text-bold.text-mono.bg-red-500.hover:bg-red-400.h-10.w-40.rounded.laptop:bg-green-400", {
                onclick: increment
            }, count + " clicks"),
        ])
    }
}

m.mount(root, App)