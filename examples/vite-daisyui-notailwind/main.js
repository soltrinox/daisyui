import 'daisyui/dist/full.css'

document.querySelector('#app').innerHTML = `

<div data-theme="dark">
<div className="p-10 bg-base-100 text-base-content">
  <button className="btn">button</button>
  <button className="btn btn-primary">button</button>
  <button className="btn btn-secondary">button</button>
  <button className="btn btn-accent">button</button>
</div>



<div className="p-10 bg-base-100 text-base-content">

  <label for="my-modal1" class="btn modal-button">Modal</label>
  <input type="checkbox" id="my-modal1" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box my-6 indicator">
      <div class="indicator-item indicator-top">
        <button class="btn btn-primary ">$120.00</button>
      </div>
      <div class="border card shadow-2xl w-100 m-6">
        <figure>
          <img src="https://elektra.vtexassets.com/arquivos/ids/2880310-1200-auto?width=1200&height=auto&aspect=true" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">DaisyUI Card</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
        </div>
        <label for="my-modal1" class="btn">Close</label>
        <button class="btn btn-secondary">Order</button>
      </div>
      
    </div>
  </div>


  <label for="my-modal" class="btn modal-button">Modal</label>
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box my-6 indicator">
      <div class="indicator-item indicator-top">
        <button class="btn btn-primary">Apply</button>
      </div>
      <div class="border card shadow-2xl w-100 m-6">
        <figure>
          <img src="https://elektra.vtexassets.com/arquivos/ids/2880310-1200-auto?width=1200&height=auto&aspect=true" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">DaisyUI Card</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
        </div>
        <button class="btn btn-secondary">accent</button>
      </div>
    </div>
  </div>



  <label for="my-modal" class="btn modal-button">Modal</label>
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box my-6 indicator">
      <div class="indicator-item indicator-top">
        <button class="btn btn-primary">Apply</button>
      </div>
      <div class="border card shadow-2xl w-100 m-6">
        <figure>
          <img src="https://elektra.vtexassets.com/arquivos/ids/2880310-1200-auto?width=1200&height=auto&aspect=true" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">DaisyUI Card</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
        </div>
        <button class="btn btn-secondary">accent</button>
      </div>
    </div>
  </div>


  <div class="avatar online m-10">
    <div class="rounded-full w-24 h-24">
      <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
    </div>
  </div>
  <div class="avatar offline m-10">
    <div class="rounded-full w-24 h-24">
      <img src="http://daisyui.com/tailwind-css-component-profile-2@94w.png" />
    </div>
  </div>
  <div class="avatar online m-10">
    <div class="rounded-full w-24 h-24">
      <img src="http://daisyui.com/tailwind-css-component-profile-3@94w.png" />
    </div>
  </div>


</div>



<ul class="steps my-4 w-full">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>


</div>

`
