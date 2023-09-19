import m from 'mithril'

new EventSource('/esbuild').addEventListener('change', () => location.reload())

const root = document.body

let count = 0
const increment = function () {
    count++
}

const App = {

    view: function () {
        return m("span", { class: "bg-gray-700 text-white min-h-screen flex grid grid-rows-2 justify-center items-center gap-2 sm:bg-blue-400    md:bg-teal-400 lg:bg-orange-400 xl:bg-violet-400 2xl:bg-black" }, [
            m("h1.title.text-2xl", "My first app"),
            m("button.text-bold.text-mono.bg-red-500.hover:bg-red-400.h-10.w-40.rounded.laptop:bg-green-400", {
                onclick: increment
            }, count + " clicks"),
        ])
    }
}

m.mount(root, App)