const WHATSAPP = '5491168702510';
const ADMIN_PIN = '0608';
const STORAGE_KEY = 'elBarrilMenuV2';
const defaultDishes = [
  {id:'emp-mariscos',name:'Empanada de mariscos',category:'Entradas',price:8500,description:'Empanada de mariscos con salsa fresca de tomate.',tags:['mariscos','tomate','entrada','empanada'],badge:'COCINA DEL MAR'},
  {id:'emp-langostinos',name:'Empanada de langostinos',category:'Entradas',price:8500,description:'Empanada de langostinos con salsa fresca de tomate.',tags:['langostinos','tomate','entrada','empanada'],badge:'COCINA DEL MAR'},
  {id:'rabas-limon',name:'Rabas rebozadas al limón',category:'Entradas',price:25000,description:'Rabas rebozadas en harina con limón.',tags:['rabas','calamar','limón','limon','rebozado','frito'],badge:'FAVORITO'},
  {id:'rabas-provenzal',name:'Rabas a la provenzal',category:'Entradas',price:26000,description:'Rabas rebozadas en harina a la provenzal.',tags:['rabas','calamar','ajo','perejil','provenzal','rebozado'],badge:'FAVORITO'},
  {id:'merluza-bocaditos',name:'Bocaditos fritos de merluza',category:'Mar',price:27000,description:'Bocaditos de merluza fritos con guarnición a elección.',tags:['merluza','pescado','frito','guarnición','guarnicion'],badge:'COCINA DEL MAR'},
  {id:'cazuela-clasica-1',name:'Cazuela clásica · 1 persona',category:'Mar',price:40000,description:'Cazuela de mariscos clásica, base de salsa de tomate, morrón y cebolla.',tags:['cazuela','mariscos','tomate','morrón','morron','cebolla','individual'],badge:'ESPECIALIDAD'},
  {id:'cazuela-clasica-2',name:'Cazuela clásica · 2 personas',category:'Mar',price:66000,description:'Cazuela de mariscos clásica para compartir. Base de tomate, morrón y cebolla.',tags:['cazuela','mariscos','tomate','morrón','morron','cebolla','para compartir'],badge:'ESPECIALIDAD'},
  {id:'cazuela-especial-1',name:'Cazuela especial azafranada · 1 persona',category:'Mar',price:42000,description:'Cazuela de mariscos con base de morrón y cebolla, terminada con crema azafranada.',tags:['cazuela','mariscos','azafrán','azafran','crema','morrón','morron','cebolla','individual'],badge:'ESPECIALIDAD'},
  {id:'cazuela-especial-2',name:'Cazuela especial azafranada · 2 personas',category:'Mar',price:68000,description:'Cazuela de mariscos con crema azafranada, morrón y cebolla. Para compartir.',tags:['cazuela','mariscos','azafrán','azafran','crema','morrón','morron','cebolla','para compartir'],badge:'ESPECIALIDAD'},
  {id:'cazuela-americana-1',name:'Cazuela sur americana · 1 persona',category:'Mar',price:42000,description:'Cazuela clásica con leche de coco, cilantro y jalapeño.',tags:['cazuela','mariscos','leche de coco','coco','cilantro','jalapeño','jalapeno','individual'],badge:'ESPECIALIDAD'},
  {id:'cazuela-americana-2',name:'Cazuela sur americana · 2 personas',category:'Mar',price:68000,description:'Cazuela con leche de coco, cilantro y jalapeño, para compartir.',tags:['cazuela','mariscos','leche de coco','coco','cilantro','jalapeño','jalapeno','para compartir'],badge:'ESPECIALIDAD'},
  {id:'corvina',name:'Corvina negra a elección',category:'Mar',price:30000,description:'Corvina negra a la plancha con guarnición a elección. Elegí una salsa de la casa.',tags:['corvina','pescado','plancha','guarnición','guarnicion','cítrica','citrica','curry','ajo','vino blanco','criolla','teriyaki','champiñones','champinones'],badge:'A LA PLANCHA'},
  {id:'abadejo',name:'Abadejo a elección',category:'Mar',price:33000,description:'Abadejo a la plancha con guarnición a elección. Elegí una salsa de la casa.',tags:['abadejo','pescado','plancha','guarnición','guarnicion','cítrica','citrica','curry','ajo','vino blanco','criolla','teriyaki','champiñones','champinones'],badge:'A LA PLANCHA'},
  {id:'bife-criolla',name:'Bife de chorizo a la criolla',category:'Carnes',price:30000,description:'Bife de chorizo con papas fritas o puré. Salsa criolla de tomate cherry, ajo y albahaca.',tags:['bife','carne','chorizo','tomate cherry','ajo','albahaca','criolla','papas','puré','pure'],badge:'NUESTRAS CARNES'},
  {id:'bife-bosque',name:'Bife de chorizo del bosque',category:'Carnes',price:30000,description:'Bife de chorizo con papas fritas o puré y crema de champiñones.',tags:['bife','carne','chorizo','champiñones','champinones','hongos','crema','papas','puré','pure'],badge:'NUESTRAS CARNES'},
  {id:'bife-riojana',name:'Bife de chorizo a la riojana',category:'Carnes',price:31000,description:'Con cebolla, morrón, jamón y dos huevos fritos. Acompañado de papas fritas o puré.',tags:['bife','carne','chorizo','cebolla','morrón','morron','jamón','jamon','huevo','papas','puré','pure'],badge:'NUESTRAS CARNES'},
  {id:'bife-barril',name:'Bife de chorizo El Barril',category:'Carnes',price:31000,description:'Con cheddar, panceta crocante, verdeo y dos huevos fritos.',tags:['bife','carne','chorizo','cheddar','panceta','verdeo','huevo'],badge:'NUESTRAS CARNES'},
  {id:'bondiola',name:'Bondiola braseada',category:'Carnes',price:28000,description:'Bondiola con salsa y guarnición a elección: miel y mostaza, barbacoa, champiñones, crema de puerros, cítrica o teriyaki.',tags:['cerdo','bondiola','miel','mostaza','barbacoa','champiñones','champinones','crema de puerros','cítrica','citrica','teriyaki','guarnición','guarnicion'],badge:'COCCIÓN LENTA'},
  {id:'wok-pollo-chop',name:'Chop Suey de pollo',category:'Wok',price:26000,description:'Vegetales salteados con pollo y champiñones, salsa de soja y semillas de sésamo.',tags:['wok','pollo','vegetales','verduras','champiñones','champinones','soja','sésamo','sesamo','oriental'],badge:'COCINA ORIENTAL'},
  {id:'wok-pollo-chowfan',name:'Chow Fan de pollo',category:'Wok',price:26000,description:'Vegetales y arroz salteados con pollo o champiñones, salsa de soja y semillas de sésamo.',tags:['wok','pollo','vegetales','verduras','arroz','champiñones','champinones','soja','sésamo','sesamo','oriental'],badge:'COCINA ORIENTAL'},
  {id:'wok-pollo-chowmien',name:'Chow Mien de pollo',category:'Wok',price:26000,description:'Vegetales y fideos salteados con pollo o champiñones, salsa de soja y semillas de sésamo.',tags:['wok','pollo','vegetales','verduras','fideos','champiñones','champinones','soja','sésamo','sesamo','oriental'],badge:'COCINA ORIENTAL'},
  {id:'wok-langostinos',name:'Wok de langostinos',category:'Wok',price:28000,description:'Elegí Chop Suey, Chow Fan o Chow Mien con langostinos, salsa de soja y sésamo.',tags:['wok','langostinos','mariscos','vegetales','verduras','arroz','fideos','soja','sésamo','sesamo'],badge:'COCINA ORIENTAL'},
  {id:'sintacc-pollo',name:'Pechuga a la plancha · sin TACC',category:'Sin TACC',price:27000,description:'Pechuga a la plancha con guarnición de verduras asadas o papas a la crema.',tags:['sin tacc','celíaco','celiaco','gluten free','pollo','pechuga','plancha','verduras','papas'],badge:'SIN TACC'},
  {id:'sintacc-bife',name:'Ojo de bife a la plancha · sin TACC',category:'Sin TACC',price:28500,description:'Ojo de bife a la plancha con guarnición de verduras asadas o papas a la crema.',tags:['sin tacc','celíaco','celiaco','gluten free','carne','bife','plancha','verduras','papas'],badge:'SIN TACC'},
  {id:'infantil-noquis',name:'Ñoquis con salsa blanca y mozzarella',category:'Menú infantil',price:19000,description:'Ñoquis con salsa blanca y queso mozzarella.',tags:['niños','niños','infantil','ñoquis','noquis','pasta','salsa blanca','mozzarella'],badge:'MENÚ INFANTIL'},
  {id:'infantil-milanesa',name:'Milanesa de peceto infantil',category:'Menú infantil',price:19000,description:'Milanesa de peceto con papas fritas o puré.',tags:['niños','infantil','peceto','carne','milanesa','papas','puré','pure'],badge:'MENÚ INFANTIL'},
  {id:'infantil-bastones',name:'Bastones de pollo',category:'Menú infantil',price:19500,description:'Bastones de pollo rellenos con mozzarella, con papas fritas o puré.',tags:['niños','infantil','pollo','bastones','mozzarella','papas','puré','pure'],badge:'MENÚ INFANTIL'},
  {id:'infantil-hamburguesa',name:'Hamburguesa casera infantil',category:'Menú infantil',price:20000,description:'Hamburguesa casera con mozzarella y papas fritas.',tags:['niños','infantil','hamburguesa','carne','mozzarella','papas'],badge:'MENÚ INFANTIL'},
  {id:'milanesa-berenjena',name:'Milanesa de berenjena napolitana',category:'Minutas',price:26000,description:'Milanesa de berenjena a la napolitana.',tags:['vegetariano','berenjena','milanesa','napolitana','tomate','mozzarella'],badge:'MINUTAS'},
  {id:'milanesa-carne',name:'Milanesa de carne o pollo',category:'Minutas',price:26000,description:'Milanesa de peceto o pechuga de pollo con guarnición a elección.',tags:['carne','pollo','peceto','pechuga','milanesa','guarnición','guarnicion'],badge:'MINUTAS'},
  {id:'milanesa-especial',name:'Milanesa napolitana, suiza o fugazzeta',category:'Minutas',price:28000,description:'Milanesa de carne o pollo a la napolitana, suiza o fugazzeta.',tags:['carne','pollo','milanesa','napolitana','suiza','fugazzeta','tomate','queso','cebolla'],badge:'MINUTAS'},
  {id:'pechuga-grillada',name:'Pechuga deshuesada grillada',category:'Minutas',price:25000,description:'Pechuga deshuesada grillada.',tags:['pollo','pechuga','grillada','plancha'],badge:'MINUTAS'},
  {id:'pechuga-salsa',name:'Pechuga con salsa a elección',category:'Minutas',price:27000,description:'Pechuga deshuesada con salsa de crema de puerros, miel y mostaza o barbacoa.',tags:['pollo','pechuga','crema de puerros','miel','mostaza','barbacoa','salsa'],badge:'MINUTAS'},
  {id:'pechuga-4quesos',name:'Pechuga 4 quesos o champiñones',category:'Minutas',price:28000,description:'Pechuga deshuesada con salsa cuatro quesos o champiñones.',tags:['pollo','pechuga','4 quesos','cuatro quesos','mozzarella','roquefort','parmesano','pategrás','champiñones','champinones'],badge:'MINUTAS'},
  {id:'guarnicion-papas',name:'Papas fritas, batatas o puré',category:'Guarniciones',price:12000,description:'Elegí papas fritas, batatas fritas, puré de papa o puré de calabaza.',tags:['papas','papas fritas','batatas','puré','pure','calabaza','guarnición','guarnicion'],badge:'GUARNICIONES'},
  {id:'guarnicion-ensalada',name:'Ensalada clásica',category:'Guarniciones',price:12000,description:'Ensalada de tres ingredientes a elección: lechuga, tomate, zanahoria, cebolla, huevo, rúcula o ajo.',tags:['ensalada','lechuga','tomate','zanahoria','cebolla','huevo','rúcula','rucula','ajo','guarnición','guarnicion'],badge:'GUARNICIONES'},
  {id:'guarnicion-verduras',name:'Verduras asadas',category:'Guarniciones',price:0,description:'Verduras asadas de estación: cebolla, zanahoria, zapallito, calabaza, papa o morrón. Precio a confirmar.',tags:['verduras','vegetales','cebolla','zanahoria','zapallito','calabaza','papa','morrón','morron','guarnición','guarnicion'],badge:'GUARNICIONES'},
  {id:'balotina-pollo',name:'Balotina de pollo rellena',category:'Carnes',price:0,description:'Pata muslo deshuesada rellena con jamón, queso, tomates cherry y albahaca. Salsa criolla o crema de puerros. Precio individual a confirmar; también figura como opción del menú de tierra.',tags:['pollo','balotina','jamón','jamon','queso','tomate cherry','albahaca','criolla','crema de puerros','menú de tierra'],badge:'MENÚ DE TIERRA'},
  {id:'peceto-frio',name:'Peceto de ternera frío',category:'Entradas',price:0,description:'Peceto salseado con miel y mostaza o salsa cuatro quesos, acompañado de ensalada rusa. Precio individual a confirmar; también figura como entrada del menú de tierra.',tags:['peceto','ternera','carne','entrada fría','entrada fria','miel','mostaza','4 quesos','cuatro quesos','ensalada rusa','menú de tierra'],badge:'MENÚ DE TIERRA'},
  {id:'canelones-verdura',name:'Canelones de verdura y champiñones',category:'Pastas',price:0,description:'Canelones de verdura y champiñones; salsa cuatro quesos, crema de puerros o tomate cherry con ajo y albahaca. Precio a confirmar; también figura en el menú vegetariano.',tags:['pasta','canelones','verdura','vegetariano','champiñones','champinones','4 quesos','cuatro quesos','crema de puerros','tomate cherry','ajo','albahaca'],badge:'PASTA CASERA'},
  {id:'chowfan-vegetariano',name:'Chow Fan vegetariano',category:'Wok',price:0,description:'Salteado al wok de verduras, arroz y champiñones, con salsa de soja y semillas de sésamo. Precio a confirmar; también figura en el menú vegetariano.',tags:['wok','chow fan','vegetariano','verduras','vegetales','arroz','champiñones','champinones','soja','sésamo','sesamo'],badge:'MENÚ VEGETARIANO'},
  {id:'bebidas-sin-alcohol',name:'Gaseosas, aguas y saborizadas',category:'Bebidas',price:0,description:'Gaseosas, agua mineral con o sin gas y aguas saborizadas. Precio a confirmar.',tags:['bebida','gaseosa','agua','agua mineral','sin alcohol','saborizada'],badge:'BEBIDAS'},
  {id:'casata',name:'Casata tricolor',category:'Postres',price:0,description:'Postre apto para celíacos y diabéticos. Precio a confirmar.',tags:['postre','helado','sin tacc','celíaco','celiaco','diabético','diabetico'],badge:'POSTRES'},
  {id:'bombon',name:'Bombón escocés',category:'Postres',price:0,description:'Precio a confirmar.',tags:['postre','helado','chocolate'],badge:'POSTRES'},
  {id:'almendrado',name:'Almendrado',category:'Postres',price:0,description:'Precio a confirmar.',tags:['postre','helado','almendra'],badge:'POSTRES'},
  {id:'panqueques',name:'Panqueques con dulce de leche',category:'Postres',price:0,description:'Precio a confirmar.',tags:['postre','panqueque','dulce de leche'],badge:'POSTRES'},
  {id:'flan',name:'Flan casero con dulce de leche',category:'Postres',price:0,description:'Precio a confirmar.',tags:['postre','flan','dulce de leche'],badge:'POSTRES'},
  {id:'tarta-manzana',name:'Tarta tibia de manzana',category:'Postres',price:0,description:'Tarta tibia de manzana con helado de crema americana. Precio a confirmar.',tags:['postre','manzana','helado','crema americana'],badge:'POSTRES'},
  {id:'menu-mar',name:'Menú de mar · adulto',category:'Menús especiales',price:70000,description:'Menú para adultos: entrada, plato principal, postre y agua o gaseosa. Otras bebidas aparte.',tags:['menú','menu','mariscos','pescado','adultos','entrada','plato principal','postre'],badge:'MENÚ COMPLETO'},
  {id:'menu-tierra',name:'Menú de tierra · adulto',category:'Menús especiales',price:70000,description:'Menú para adultos: entrada, plato principal, postre y agua o gaseosa. Otras bebidas aparte.',tags:['menú','menu','carne','pollo','tierra','adultos','entrada','plato principal','postre'],badge:'MENÚ COMPLETO'},
  {id:'menu-vegetariano',name:'Menú vegetariano · adulto',category:'Menús especiales',price:56000,description:'Menú vegetariano para adultos. Incluye entrada, plato principal, postre y agua o gaseosa.',tags:['menú','menu','vegetariano','verduras','sin carne','entrada','plato principal','postre'],badge:'MENÚ COMPLETO'},
  {id:'menu-infantil-completo',name:'Menú para chicos',category:'Menús especiales',price:26000,description:'Incluye plato principal, postre y agua o gaseosa.',tags:['menú','menu','niños','infantil','plato principal','postre'],badge:'MENÚ COMPLETO'}
];
let dishes = loadDishes();
function loadDishes(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||structuredClone(defaultDishes)}catch{return structuredClone(defaultDishes)}}
const categoryOrder = ['Todo','Entradas','Mar','Pastas','Carnes','Wok','Sin TACC','Menú infantil','Minutas','Guarniciones','Postres','Bebidas','Menús especiales'];
function allCategories(){const existing=new Set(dishes.map(d=>d.category));return ['Todo',...categoryOrder.filter(c=>c!=='Todo'&&existing.has(c)),...dishes.map(d=>d.category).filter(c=>!categoryOrder.includes(c)).filter((c,i,a)=>a.indexOf(c)===i)]}

let activeCategory = 'Todo';
const cart = new Map();
const categoryList = document.querySelector('#category-list');
const dishGrid = document.querySelector('#dish-grid');
const menuSearch = document.querySelector('#menu-search');
const cartPanel = document.querySelector('#cart-panel');
const backdrop = document.querySelector('#cart-backdrop');
const cartItems = document.querySelector('#cart-items');
const cartEmpty = document.querySelector('#cart-empty');
const money = amount => amount ? new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(Number(amount)) : 'Precio a confirmar';
const normalize = value => String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es').replace(/[^a-z0-9]+/g,' ').trim();
const escapeHTML = value => String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function renderCategories(){
  categoryList.innerHTML = allCategories().map(category => {
    const count = category === 'Todo' ? dishes.length : dishes.filter(d => d.category === category).length;
    return `<button class="category-button ${activeCategory === category ? 'active' : ''}" type="button" data-category="${category}">${category}<span>${String(count).padStart(2,'0')}</span></button>`;
  }).join('');
  categoryList.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {activeCategory=button.dataset.category;renderCategories();renderDishes()}));
}
function renderDishes(){
  const query = normalize(menuSearch.value);
  const visible = dishes.filter(d => (activeCategory === 'Todo' || d.category === activeCategory) && (!query || normalize([d.name,d.description,d.category,d.badge,...(d.tags||[])].join(' ')).includes(query)));
  document.querySelector('#menu-count').textContent = `${activeCategory === 'Todo' ? 'CARTA COMPLETA' : activeCategory.toLocaleUpperCase('es')} · ${visible.length} OPCIONES`;
  dishGrid.innerHTML = visible.length ? visible.map(d => `<article class="dish-card"><div><span class="dish-category">${escapeHTML(d.badge||d.category)}</span><h3>${escapeHTML(d.name)}</h3><p>${escapeHTML(d.description||'')}</p>${(d.tags||[]).length?`<div class="dish-tags">${d.tags.slice(0,4).map(tag=>`<span>${escapeHTML(tag)}</span>`).join('')}</div>`:''}</div><div class="dish-foot"><span class="dish-price">${money(d.price)}</span><button class="add-dish" type="button" aria-label="Agregar ${escapeHTML(d.name)}" data-add="${escapeHTML(d.id)}">+</button></div></article>`).join('') : '<p class="no-results">No encontramos coincidencias. Probá con nombre, ingrediente, salsa o parte de una frase.</p>';
  dishGrid.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => addItem(button.dataset.add)));
}
function addItem(id){cart.set(id,(cart.get(id)||0)+1);renderCart();openCart()}
function changeQty(id,delta){const qty=(cart.get(id)||0)+delta;if(qty<=0)cart.delete(id);else cart.set(id,qty);renderCart()}
function renderCart(){
  const totalQty=[...cart.values()].reduce((a,b)=>a+b,0);
  document.querySelector('#cart-count').textContent=totalQty;
  cartEmpty.classList.toggle('is-hidden',totalQty>0);
  cartItems.classList.toggle('is-hidden',totalQty===0);
  cartItems.innerHTML=[...cart.entries()].map(([id,qty])=>{const d=dishes.find(item=>item.id===id);return `<div class="cart-row"><div><h4>${escapeHTML(d.name)}</h4><small>${money(d.price)} · ${escapeHTML(d.category)}</small></div><div class="qty-control"><button type="button" aria-label="Quitar uno de ${escapeHTML(d.name)}" data-change="${escapeHTML(id)}" data-delta="-1">−</button><b>${qty}</b><button type="button" aria-label="Agregar uno de ${escapeHTML(d.name)}" data-change="${escapeHTML(id)}" data-delta="1">+</button></div></div>`}).join('');
  const hasUnknown=[...cart.keys()].some(id=>!(dishes.find(d=>d.id===id)?.price));
  const total=[...cart.entries()].reduce((sum,[id,qty])=>sum+(Number(dishes.find(d=>d.id===id)?.price)||0)*qty,0);
  document.querySelector('#cart-total').textContent=hasUnknown?'A confirmar':money(total);
  cartItems.querySelectorAll('[data-change]').forEach(button=>button.addEventListener('click',()=>changeQty(button.dataset.change,Number(button.dataset.delta))));
}
function openCart(){cartPanel.classList.add('open');backdrop.classList.add('open');document.body.classList.add('cart-open');cartPanel.setAttribute('aria-hidden','false')}
function closeCart(){cartPanel.classList.remove('open');backdrop.classList.remove('open');document.body.classList.remove('cart-open');cartPanel.setAttribute('aria-hidden','true')}
document.querySelector('#open-cart').addEventListener('click',openCart);
document.querySelector('#close-cart').addEventListener('click',closeCart);
backdrop.addEventListener('click',closeCart);
document.querySelector('#browse-menu').addEventListener('click',()=>{closeCart();document.querySelector('#carta').scrollIntoView({behavior:'smooth'})});
menuSearch.addEventListener('input',renderDishes);
document.querySelectorAll('[data-search]').forEach(button=>button.addEventListener('click',()=>{menuSearch.value=button.dataset.search;activeCategory='Todo';renderCategories();renderDishes();menuSearch.focus()}));
document.querySelectorAll('[data-filter-link]').forEach(link=>link.addEventListener('click',()=>{activeCategory='Mar';renderCategories();renderDishes()}));

const orderType=document.querySelector('#order-type');
const tableSelect=document.querySelector('#table-select');
const deliveryFields=document.querySelector('#delivery-fields');
const tableNumber=document.querySelector('#table-number');
for(let i=1;i<=20;i++){const option=document.createElement('option');option.value=String(i);option.textContent=`Mesa ${String(i).padStart(2,'0')}`;tableNumber.append(option)}
function updateOrderType(){const type=orderType.value;tableSelect.classList.toggle('is-hidden',type!=='local');deliveryFields.classList.toggle('show',type==='delivery')}
orderType.addEventListener('change',updateOrderType);updateOrderType();
document.querySelector('#checkout').addEventListener('click',()=>{
  if(!cart.size){alert('Sumá al menos un plato a tu pedido.');closeCart();document.querySelector('#carta').scrollIntoView({behavior:'smooth'});return}
  const type=orderType.value;const typeLabel={local:'Comer en el local',takeaway:'Para llevar',delivery:'Delivery'}[type];
  if(type==='local'&&!tableNumber.value){tableNumber.focus();return}
  const address=document.querySelector('#delivery-address').value.trim();const customer=document.querySelector('#order-name').value.trim();
  if(!customer){document.querySelector('#order-name').focus();return}
  if(type==='delivery'&&!address){document.querySelector('#delivery-address').focus();return}
  const lines=[...cart.entries()].map(([id,qty])=>{const item=dishes.find(d=>d.id===id);const lineTotal=item.price?money(item.price*qty):'A confirmar';return `• ${String(qty).padStart(2,'0')} × ${item.name}\n   Unitario: ${money(item.price)} · Subtotal: ${lineTotal}`}).join('\n');
  const knownTotal=[...cart.entries()].reduce((sum,[id,qty])=>sum+(Number(dishes.find(d=>d.id===id)?.price)||0)*qty,0);
  const hasUnknown=[...cart.keys()].some(id=>!(dishes.find(d=>d.id===id)?.price));
  const now=new Date().toLocaleString('es-AR',{dateStyle:'short',timeStyle:'short'});
  const details=type==='local'?`Cliente: ${customer}\nMesa: ${tableNumber.value}`:type==='delivery'?`Cliente: ${customer}\nDirección de entrega: ${address}`:`Cliente: ${customer}`;
  const message=`*EL BARRIL RESTAURANTE*\n*COMANDA DE PEDIDO*\nN.º EB-${Date.now().toString().slice(-6)}\nFecha: ${now}\nModalidad: ${typeLabel}\n${details}\n━━━━━━━━━━━━━━━━━━\n*DETALLE DEL PEDIDO*\n${lines}\n━━━━━━━━━━━━━━━━━━\n*TOTAL: ${hasUnknown?'A CONFIRMAR':money(knownTotal)}*\n\nPor favor, confirmar recepción, disponibilidad y tiempo estimado.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,'_blank','noopener');
});

const reservationForm=document.querySelector('#reservation-form');
const dateInput=reservationForm.querySelector('[name="date"]');
const today=new Date();dateInput.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);
function showReservationWeekday(){const preview=document.querySelector('#date-weekday');if(!dateInput.value){preview.textContent='Elegí la fecha para ver el día.';return}const date=new Date(`${dateInput.value}T12:00:00`);preview.textContent=date.toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}
dateInput.addEventListener('change',showReservationWeekday);
reservationForm.addEventListener('submit',event=>{
  event.preventDefault();const data=new FormData(reservationForm);const date=new Date(`${data.get('date')}T12:00:00`).toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  const message=`*SOLICITUD DE RESERVA · EL BARRIL*\nNombre: ${data.get('name')}\nComensales: ${data.get('guests')}\nFecha: ${date}\nHorario: ${data.get('time')}${data.get('email')?`\nEmail: ${data.get('email')}`:''}${data.get('notes')?`\nComentarios: ${data.get('notes')}`:''}\n\nQuedo a la espera de confirmación. `;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,'_blank','noopener');
});

renderCategories();renderDishes();renderCart();
window.ElBarrilMenu={get dishes(){return dishes},get categories(){return allCategories().filter(c=>c!=='Todo')},save(next){dishes=next;localStorage.setItem(STORAGE_KEY,JSON.stringify(dishes));for(const id of cart.keys())if(!dishes.some(d=>d.id===id))cart.delete(id);renderCategories();renderDishes();renderCart()},formatMoney:money,escapeHTML};
if(window.Lenis){const lenis=new Lenis({duration:1.05,smoothWheel:true});function raf(time){lenis.raf(time);requestAnimationFrame(raf)}requestAnimationFrame(raf);if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);lenis.on('scroll',ScrollTrigger.update)}}
if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);gsap.utils.toArray('.intro-grid,.qualities,.feature-photo,.feature-copy,.section-heading,.dish-card,.gallery-item,.visit-copy,.visit-photo,.reservation-intro,.reservation-form').forEach((el,index)=>gsap.from(el,{y:26,opacity:0,duration:.7,ease:'power2.out',delay:el.classList.contains('dish-card')?(index%4)*.045:0,scrollTrigger:{trigger:el,start:'top 88%',once:true}}))}
