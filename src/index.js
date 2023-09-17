import m from 'mithril'

new EventSource('/esbuild').addEventListener('change', () => location.reload())

export const root = document.body

let count = 0

const App = {
    view: function () {
        return m("body.bg-gray-700.text-white.min-h-screen.h-full.flex.flex-1.gap-2.justify-center.items-center", [
            m("h1.text-2xl", "My first app"),
            m("button.text-bold.text-mono.bg-red-500.hover:bg-red-300.h-10.w-40.rounded", {
                onclick: function () {
                    count++
                }
            }, count + " clicks")
        ])
    }
}

m.mount(root, App)