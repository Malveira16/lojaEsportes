import { ProdutoController } from "../controller/ProdutoController"

export const produtoRoutes = [{
    method: "get",
    route: "/produtos",
    controller: ProdutoController,
    action: "all"
}, {
    method: "get",
    route: "/produtos/:id",
    controller: ProdutoController,
    action: "one"
}, {
    method: "post",
    route: "/produtos",
    controller: ProdutoController,
    action: "save"
}, {
    method: "delete",
    route: "/produtos/:id",
    controller: ProdutoController,
    action: "remove"
}]