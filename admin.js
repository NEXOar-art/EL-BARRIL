(() => {
  const api=window.ElBarrilMenu;
  const panel=document.querySelector('#admin-panel');
  const backdrop=document.querySelector('#admin-backdrop');
  const login=document.querySelector('#admin-login');
  const editor=document.querySelector('#admin-editor');
  const list=document.querySelector('#admin-list');
  const title=document.querySelector('#admin-title');
  let authenticated=false;
  const esc=api.escapeHTML;
  function open(){panel.classList.add('open');backdrop.classList.add('open');document.body.classList.add('cart-open');panel.setAttribute('aria-hidden','false');if(authenticated)renderAdminList();else setTimeout(()=>document.querySelector('#admin-pin').focus(),180)}
  function close(){panel.classList.remove('open');backdrop.classList.remove('open');document.body.classList.remove('cart-open');panel.setAttribute('aria-hidden','true')}
  document.querySelector('#admin-open').addEventListener('click',open);
  document.querySelector('#admin-close').addEventListener('click',close);
  backdrop.addEventListener('click',close);
  function loginAdmin(){
    const field=document.querySelector('#admin-pin');
    if(field.value==='0608'){authenticated=true;login.classList.add('is-hidden');editor.classList.remove('is-hidden');title.textContent='Editar la carta';document.querySelector('#pin-error').textContent='';field.value='';renderAdminList()}
    else{document.querySelector('#pin-error').textContent='La clave no coincide. Probá otra vez.';field.select()}
  }
  document.querySelector('#admin-login-button').addEventListener('click',loginAdmin);
  document.querySelector('#admin-pin').addEventListener('keydown',event=>{if(event.key==='Enter')loginAdmin()});
  function renderAdminList(){
    const categories=api.categories;
    list.innerHTML=api.dishes.map(d=>`<article class="admin-product" data-admin-card="${esc(d.id)}"><div class="admin-product-head"><b>${esc(d.name)}</b><button class="admin-delete" type="button" data-delete="${esc(d.id)}">Eliminar</button></div><div class="admin-fields"><label>Nombre<input data-field="name" value="${esc(d.name)}"></label><label>Categoría<select data-field="category">${categories.map(c=>`<option ${c===d.category?'selected':''} value="${esc(c)}">${esc(c)}</option>`).join('')}<option value="__custom">Otra categoría…</option></select><input class="custom-category" data-field="custom-category" placeholder="Escribí una categoría" value=""></label><label>Precio (ARS)<input data-field="price" type="number" min="0" step="500" value="${Number(d.price)||0}"></label><label>Etiqueta corta<input data-field="badge" value="${esc(d.badge||'')}"></label><label class="admin-description">Descripción<input data-field="description" value="${esc(d.description||'')}"></label><label class="admin-tags">Ingredientes, salsas y palabras clave<input data-field="tags" value="${esc((d.tags||[]).join(', '))}"></label></div><div class="admin-row-actions"><small>Si el precio se desconoce, dejalo en 0 para mostrar “A confirmar”.</small><button class="admin-save" type="button" data-save="${esc(d.id)}">Guardar cambios</button></div></article>`).join('');
    list.querySelectorAll('[data-save]').forEach(button=>button.addEventListener('click',()=>saveProduct(button.dataset.save)));
    list.querySelectorAll('[data-delete]').forEach(button=>button.addEventListener('click',()=>{if(confirm('¿Eliminar este producto de la carta?'))api.save(api.dishes.filter(d=>d.id!==button.dataset.delete));renderAdminList()}));
    list.querySelectorAll('[data-field="category"]').forEach(select=>select.addEventListener('change',()=>select.nextElementSibling.classList.toggle('show',select.value==='__custom')));
  }
  function saveProduct(id){
    const card=list.querySelector(`[data-admin-card="${CSS.escape(id)}"]`);const read=name=>card.querySelector(`[data-field="${name}"]`).value.trim();
    const selected=read('category');const category=selected==='__custom'?read('custom-category'):selected;
    if(!read('name')||!category){alert('Completá el nombre y la categoría del producto.');return}
    const next=api.dishes.map(d=>d.id===id?{...d,name:read('name'),category,price:Number(read('price'))||0,badge:read('badge')||category.toUpperCase(),description:read('description'),tags:read('tags').split(',').map(t=>t.trim()).filter(Boolean)}:d);
    api.save(next);renderAdminList();
  }
  document.querySelector('#add-product').addEventListener('click',()=>{
    const id=`nuevo-${Date.now()}`;api.save([...api.dishes,{id,name:'Nuevo producto',category:'Entradas',price:0,description:'',tags:[],badge:'NOVEDAD'}]);renderAdminList();
    const card=list.querySelector(`[data-admin-card="${CSS.escape(id)}"]`);card.scrollIntoView({behavior:'smooth',block:'center'});card.querySelector('[data-field="name"]').focus();
  });
  document.querySelector('#export-menu').addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify(api.dishes,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='carta-el-barril.json';link.click();URL.revokeObjectURL(url);
  });
  document.querySelector('#import-menu').addEventListener('change',async event=>{
    const file=event.target.files[0];if(!file)return;
    try{const imported=JSON.parse(await file.text());if(!Array.isArray(imported)||!imported.every(d=>d&&d.id&&d.name&&d.category))throw new Error('Formato inválido');api.save(imported);renderAdminList();alert('La carta se importó correctamente.')}catch{alert('No pudimos importar el archivo. Usá un JSON exportado desde esta herramienta.')}event.target.value='';
  });
})();
