const links = document.querySelectorAll('a');
links.forEach(item => {
    item.addEventListener('click', evt => evt.preventDefault())
})

//  Filter Section Services
const tabsServices = () => {
    const head = document.querySelector('.services-tabs')
    const body = document.querySelector('.tabs-content')

    const getActiveTabName = () => {
        return head.querySelector('.active').dataset.tab
    }

    const setActiveContent = () => {
        if (body.querySelector('.active')) {
            body.querySelector('.active').classList.remove('active')
        }
        body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('active')
    }
    setActiveContent(getActiveTabName())

    head.addEventListener('click', e => {
        const caption = e.target.closest('.services-tabs-title')
        if (!caption) return
        if (caption.classList.contains('active')) return
        if (head.querySelector('.active')) {
            head.querySelector('.active').classList.remove('active')
        }
        caption.classList.add('active')
        setActiveContent(getActiveTabName())
    })
}

tabsServices()


//  Filter Our Work
const workList = document.querySelector('.work-list');


function filter() {
    const listItems = document.querySelectorAll('.work-list-item');
    workList.addEventListener('click', evt => {
        const targetId = evt.target.dataset.id
        const target = evt.target

        if (target.classList.contains('work-list-item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }

        switch (targetId) {
            case 'all':
                getWorkItems('work-blocks-item')
                break
            case 'graphic':
                getWorkItems(targetId)
                break
            case 'web':
                getWorkItems(targetId)
                break
            case 'landing':
                getWorkItems(targetId)
                break
            case 'wordpress':
                getWorkItems(targetId)
                break
        }
    })
}

filter()

function getWorkItems(className) {
    const workItems = document.querySelectorAll('.work-blocks-item');
    workItems.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

//  Our Amazing Work Adding Block
function addRow() {
    const workBlocks = document.querySelector('.work-blocks');
    const workBlocksRow = document.querySelector('.work-blocks-row').cloneNode(true);
    const workGraphic = workBlocksRow.querySelector('.graphic');
    const workWeb = workBlocksRow.querySelector('.web');
    const workLanding = workBlocksRow.querySelector('.landing');
    const workWordpress = workBlocksRow.querySelector('.wordpress');

    workGraphic.querySelector('img').src = `./img/graphic/graphic-design${workBlocks.children.length + 1}.jpg`;
    workWeb.querySelector('img').src = `./img/web/web-design${workBlocks.children.length + 1}.jpg`;
    workLanding.querySelector('img').src = `./img/landing/landing-page${workBlocks.children.length + 1}.jpg`;
    workWordpress.querySelector('img').src = `./img/wordpress/wordpress${workBlocks.children.length + 1}.jpg`;

    workBlocks.appendChild(workBlocksRow);
}


for (i = 0; i < 2; i++) addRow()


//  Button-Work Load More
const buttonWork = document.querySelector('.button-load-work');

buttonWork.addEventListener('click', evt => {
    evt.preventDefault();
    buttonWork.style.display = 'none';
    for (i = 0; i < 3; i++) addRow();
})
