import 'tailwindcss/tailwind.css'

import { Transition, Menu } from "@headlessui/react";

export default function HomePage() {
  return (
    <>
      <div className="flex w-full min-h-screen items-center justify-center bg-base-300 text-base-content" data-theme="dark">
        <Menu as="div" className="relative inline-block">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="btn btn-primary">
                  Menu
                </Menu.Button>
              </div>
              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="focus:outline-none menu p-3 shadow-lg bg-base-100 rounded-box rounded-box absolute w-56 mt-2"
                >
                  <Menu.Item>
                    <li><a>Item 1</a></li>
                  </Menu.Item>
                  <Menu.Item>
                    <li><a>Item 2</a></li>
                  </Menu.Item>
                  <Menu.Item>
                    <li><a>Item 3</a></li>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>


        <div class="m-4 space-x-2">
          <button class="btn btn-primary">primary</button>
          <button class="btn btn-secondary">secondary</button>
          <button class="btn btn-accent">accent</button>
        </div>

       <div class="m-4 space-x-2" data-theme="valentine">
          <button class="btn btn-primary">primary</button>
          <button class="btn btn-secondary">secondary</button>
          <button class="btn btn-accent">accent</button>
        </div>

        <div class="m-4 tabs">
          <button class="tab tab-lifted">Tab 1</button>
          <button class="tab tab-lifted tab-active">Tab 2</button>
          <button class="tab tab-lifted">Tab 3</button>
        </div>


        <div class="m-4 flex space-x-4">
          <input type="checkbox" class="toggle toggle-primary" />
          <input type="checkbox" class="toggle toggle-secondary" />
          <input type="checkbox" class="toggle toggle-accent" />
        </div>


        <label for="my-modal" class="btn modal-button">Modal</label>

        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <div class="my-6 indicator">
              <div class="indicator-item indicator-top">
                <button class="btn btn-primary">Apply</button>
              </div>

              <div class="border card shadow-2xl w-80 m-4">
                <figure>
                  <img src="https://picsum.photos/id/1005/500/250" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">DaisyUI Card</h2>
                  <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
                </div>
                <button class="btn btn-secondary">accent</button>
              </div>
            </div>
          </div>
        </div>

        <ul class="steps my-4 w-full">
          <li class="step step-primary">Register</li>
          <li class="step step-primary">Choose plan</li>
          <li class="step">Purchase</li>
          <li class="step">Receive Product</li>
        </ul>


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
    </>
  );
}
