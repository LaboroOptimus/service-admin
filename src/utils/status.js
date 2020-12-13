export const status = {
    new: 'Новая',
    inWork: 'В работе',
    ready: 'Выполнена',
    pay: 'Оплачено',
    refund: 'Возврат',
    close: 'Закрыта',
};

export const color = {
    new: '#73bbed',
    inWork: '#ad73ed',
    ready: '#ffea55',
    pay: '#2ea93d',
    refund: '#ff583e',
    close: '#27343e',
};

export function getStatusForServer(status) {
    switch (status) {
        case 'в работу':
            return 'inWork';
        case 'выполнена':
            return 'ready';
        case 'оплачено':
            return 'pay';
        case 'возврат':
            return 'refund';
        default:
            return 'new';
    }
}