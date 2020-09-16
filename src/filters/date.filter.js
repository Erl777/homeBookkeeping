export  default function dateFilter(value, formate = 'date') {
    console.log(value);
    const options = {};

    if (formate.includes('date')){
        options.day = '2-digit'
        options.month = 'long'
        options.year = 'numeric'
    }

    if (formate.includes('time')){
        options.hour = '2-digit'
        options.minute = '2-digit'
        options.second = '2-digit'
    }

    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}