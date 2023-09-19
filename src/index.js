import m from 'mithril'

new EventSource('/esbuild').addEventListener('change', () => location.reload())

const root = document.body

let count = 0
const increment = function () {
    count++
}

const App = {

    view: function () {
        return m("span.p-4.bg-gray-700.text-white.min-h-screen.flex.flex-1.justify-center.items-center.gap-2", [
            m("h1.title.text-2xl", "My first app"),
            m("button.text-bold.text-mono.bg-blue-500.hover:bg-blue-300.h-10.w-40.rounded", {
                onclick: increment
            }, count + " clicks"),
        ])
    }
}

m.mount(root, App)