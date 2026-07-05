// 1. Products Data Array (يمكن تعديله وتحديثه بسهولة لاحقاً)
const products = [
    {
        id: 1,
        name: "قرص طرية سادة",
        price: 60,
        description: "قرص طرية فلاحي غنية بالسمن البلدي الفاخر والسمسم، مخبوزة بعناية يومياً لتكون رفيقة مثالية لكوب الشاي الصباحي.",
        image: "images/oven_bread.jpg",
        unit: "كجم"
    },
    {
        id: 2,
        name: "قرص بالعجوة",
        price: 90,
        description: "قرص طرية وهشة محشوة بعجوة التمر الطبيعي الفاخرة المحمصة بالسمن البلدي مع رشة خفيفة من السمسم على الوجه.",
        image: "images/quras_ajwa.jpg",
        unit: "كجم"
    },
    {
        id: 3,
        name: "قرص بالملبن",
        price: 90,
        description: "قرص طرية هشة ومميزة، محشوة بالملبن التركي الأصيل النقي الذي يذوب في الفم مع كل قضمة.",
        image: "images/quras_mlban.png",
        unit: "كجم"
    },
    {
        id: 4,
        name: "بسكوت فرنساوي",
        price: 100,
        description: "بسكوت العيد المقرمش بنكهة النشادر والزبدة الطبيعية، مصنع بدقة وعناية ليعيد لك دفء ومذاق احتفالات زمان.",
        image: "images/baskot.png",
        unit: "كجم"
    },
    {
        id: 5,
        name: "كحك سادة بالسكر",
        price: 100,
        description: "كحك العيد الفاخر المحضر على الساخن بالسمن البلدي المقدوح وريحة الكحك المميزة، ناعم جداً ومغطى بطبقة كثيفة من سكر البودرة.",
        image: "images/kahk.png",
        unit: "كجم"
    },
    {
        id: 6,
        name: "كحك بالعجوة الفاخرة",
        price: 100,
        description: "كحك العيد الناعم المحشو بعجوة المدينة الفاخرة المعجونة بالسمن البلدي والمكسرات، يذوب ذوباناً في الفم.",
        image: "images/kahk 2.png",
        unit: "كجم"
    },
    {
        id: 7,
        name: "كحك بالملبن الغني",
        price: 100,
        description: "كحك فاخر وناعم للغاية محشو بالملبن البلدي الغني والمكسرات اللذيذة، مصنوع وفق أعلى معايير الجودة.",
        image: "images/kahk 1.png",
        unit: "كجم"
    },
    {
        id: 8,
        name: "قراقيش سادة",
        price: 80,
        description: "قراقيش سادة مقرمشة ولذيذة، مخبوزة بالسمن البلدي الفاخر، مثالية مع الشاي.",
        image: "images/karakesh.png",
        unit: "كجم"
    },
    {
        id: 9,
        name: "عيش فلاحي",
        price: 50,
        description: "خبز فلاحي مصري أصيل، طازج وطري ومخبوز في الفرن البلدي.",
        image: "images/3esh.png",
        unit: "كجم"
    },
    {
        id: 10,
        name: "عيش الحبة الكاملة",
        price: 50,
        description: "خبز صحي بالردة والحبة الكاملة، غني بالألياف ومناسب للدايت.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
        unit: "كجم"
    },
    {
        id: 11,
        name: "فطير مشلتت",
        price: 90,
        description: "فطير مشلتت فلاحي مورق وغني بالسمن البلدي الطبيعي.",
        image: "images/feteer.png",
        unit: "فطيرة"
    },
    {
        id: 12,
        name: "رقاق",
        price: 60,
        description: "رقاق بلدي هش ورقيق، مثالي للصواني والوجبات العائلية.",
        image: "images/rokak.png",
        unit: "كجم"
    },
    {
        id: 13,
        name: "بيتيفور",
        price: 150,
        description: "بيتيفور ناعم يذوب في الفم، مزين بالشوكولاتة والمربى والمكسرات.",
        image: "images/betefor.png",
        unit: "كجم"
    },
    {
        id: 14,
        name: "غريبة",
        price: 120,
        description: "غريبة ناعمة وفاخرة جداً، مصنوعة بالسمن البلدي الصافي ومزينة بالمكسرات.",
        image: "images/ghoriba.png",
        unit: "كجم"
    }
];

// 2. State variables
let cart = [];
let selectedPaymentMethod = "cod"; // "cod" or "vodafone"
let selectedDeliveryMethod = "delivery"; // "delivery" or "pickup"
let uploadedScreenshotBase64 = "";

// 3. DOM Elements
const pageLoader = document.getElementById("page-loader");
const productsGrid = document.getElementById("products-grid");
const cartBadge = document.getElementById("cart-badge");
const cartDrawer = document.getElementById("cart-drawer");
const cartDrawerOverlay = document.getElementById("cart-drawer-overlay");
const cartToggleBtn = document.getElementById("cart-toggle-btn");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartDrawerFooter = document.getElementById("cart-drawer-footer");
const cartTotalItems = document.getElementById("cart-total-items");
const cartTotalPrice = document.getElementById("cart-total-price");

// Form Elements
const checkoutForm = document.getElementById("checkout-form");
const customerName = document.getElementById("customer-name");
const customerPhone = document.getElementById("customer-phone");
const customerAddress = document.getElementById("customer-address");
const customerNotes = document.getElementById("customer-notes");

// 11. Select Delivery Method Toggle Cards
const deliveryCards = document.querySelectorAll(".payment-method-card[data-delivery]");
deliveryCards.forEach(card => {
    card.addEventListener("click", () => {
        deliveryCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        selectedDeliveryMethod = card.dataset.delivery;
        
        const addressGroup = document.getElementById("address-group");
        if(selectedDeliveryMethod === "pickup") {
            addressGroup.style.display = "none";
        } else {
            addressGroup.style.display = "block";
        }
        updateCartUI();
    });
});

// Select Payment Method Toggle Cards
const paymentCards = document.querySelectorAll(".payment-method-card[data-payment]");
paymentCards.forEach(card => {
    card.addEventListener("click", () => {
        paymentCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        selectedPaymentMethod = card.dataset.payment;
        
        if(selectedPaymentMethod === "vodafone") {
            document.getElementById("vodafone-box").style.display = "block";
        } else {
            document.getElementById("vodafone-box").style.display = "none";
        }
    });
});

const vodafoneBox = document.getElementById("vodafone-box");
const copyPhoneBtn = document.getElementById("copy-phone-btn");
const vodafoneScreenshotInput = document.getElementById("vodafone-screenshot");
const screenshotPreviewContainer = document.getElementById("screenshot-preview-container");
const screenshotPreview = document.getElementById("screenshot-preview");
const removePreviewBtn = document.getElementById("remove-preview-btn");

// Modal Elements
const orderModalOverlay = document.getElementById("order-modal-overlay");
const modalBtnClose = document.getElementById("modal-btn-close");
const modalCustName = document.getElementById("modal-cust-name");
const modalCustPhone = document.getElementById("modal-cust-phone");
const modalCustAddress = document.getElementById("modal-cust-address");
const modalCustNotes = document.getElementById("modal-cust-notes");
const modalCustNotesRow = document.getElementById("modal-cust-notes-row");
const modalProductsList = document.getElementById("modal-products-list");
const modalTotalPriceVal = document.getElementById("modal-total-price-val");
const modalPaymentMethodVal = document.getElementById("modal-payment-method-val");
const modalScreenshotSummary = document.getElementById("modal-screenshot-summary");
const modalScreenshotImg = document.getElementById("modal-screenshot-img");

// Toast Notification
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

// 4. Initial Load Setup
window.addEventListener("load", () => {
    // Hide page loader with smooth animation
    setTimeout(() => {
        pageLoader.classList.add("fade-out");
    }, 800);
    
    // Load existing cart from LocalStorage if available
    const savedCart = localStorage.getItem("alwaleed_bakery_cart");
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
        } catch (e) {
            cart = [];
        }
    }
    
    // Render Products Grid
    renderProducts();
});

// 5. Render Products
function renderProducts() {
    productsGrid.innerHTML = "";
    products.forEach(product => {
        const cardHtml = `
            <article class="product-card" data-id="${product.id}">
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                </div>
                <div class="product-card-body">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-card-footer">
                        <div class="product-price-row">
                            <span class="price-label">السعر:</span>
                            <span class="price-value">${product.price} <span class="price-unit">جنيه / ${product.unit || 'كجم'}</span></span>
                        </div>
                        <div class="product-actions">
                            <div class="qty-selector">
                                <button type="button" class="qty-btn dec-qty-btn" aria-label="تقليل الكمية">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <input type="text" class="qty-input" value="1" readonly>
                                <button type="button" class="qty-btn inc-qty-btn" aria-label="زيادة الكمية">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <button type="button" class="add-to-cart-btn btn-add-card" data-id="${product.id}">
                                <span>إضافة</span>
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
        productsGrid.insertAdjacentHTML("beforeend", cardHtml);
    });

    setupProductCardEventListeners();
}

// 6. Setup Product Card Controls Listener
function setupProductCardEventListeners() {
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
        const id = parseInt(card.dataset.id);
        const decBtn = card.querySelector(".dec-qty-btn");
        const incBtn = card.querySelector(".inc-qty-btn");
        const qtyInput = card.querySelector(".qty-input");
        const addBtn = card.querySelector(".btn-add-card");
        
        const step = id === 11 ? 1 : 0.5;
        
        decBtn.addEventListener("click", () => {
            let val = parseFloat(qtyInput.value);
            if (val > step) {
                qtyInput.value = val - step;
            }
        });
        
        incBtn.addEventListener("click", () => {
            let val = parseFloat(qtyInput.value);
            qtyInput.value = val + step;
        });

        addBtn.addEventListener("click", () => {
            const quantity = parseFloat(qtyInput.value);
            addToCart(id, quantity);
            
            // Micro-animation: Button feedback
            addBtn.style.transform = "scale(0.95)";
            setTimeout(() => {
                addBtn.style.transform = "none";
            }, 100);
            
            // Reset local quantity input to 1
            qtyInput.value = 1;
        });
    });
}

// 7. Cart Core Actions
function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.product.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ product, quantity });
    }

    saveCart();
    updateCartUI();
    showToast(`تم إضافة ${quantity} ${product.unit || 'كجم'} من "${product.name}" بنجاح!`);
}

function updateCartItemQuantity(productId, newQty) {
    const item = cart.find(item => item.product.id === productId);
    if (!item) return;

    if (newQty <= 0) {
        removeFromCart(productId);
    } else {
        item.quantity = newQty;
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(productId) {
    const item = cart.find(item => item.product.id === productId);
    const name = item ? item.product.name : "";
    cart = cart.filter(item => item.product.id !== productId);
    saveCart();
    updateCartUI();
    if (name) {
        showToast(`تمت إزالة "${name}" من السلة.`);
    }
}

function saveCart() {
    localStorage.setItem("alwaleed_bakery_cart", JSON.stringify(cart));
}

// 8. Update Cart UI Render
function updateCartUI() {
    // 8.1 Count totals
    let totalItems = 0;
    let totalPrice = 0;

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        // Show empty cart view
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>السلة فارغة حالياً. أضف بعض الأصناف الشهية!</p>
            </div>
        `;
        cartDrawerFooter.style.display = "none";
        cartBadge.textContent = "0";
        cartBadge.style.transform = "scale(0.8)";
        return;
    }

    // Show cart items
    cartDrawerFooter.style.display = "block";
    
    cart.forEach(item => {
        totalItems += item.quantity;
        const subtotal = item.product.price * item.quantity;
        totalPrice += subtotal;

        const itemHtml = `
            <div class="cart-item" data-id="${item.product.id}">
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.product.name}</h4>
                    <div class="cart-item-price-details">
                        <span class="cart-item-price">${item.product.price} ج.م</span>
                        <span class="cart-item-subtotal">المجموع: ${subtotal} ج.م</span>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-qty-controls">
                        <button type="button" class="cart-item-qty-btn dec-item-qty" data-id="${item.product.id}">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="cart-item-qty-val">${item.quantity}</span>
                        <button type="button" class="cart-item-qty-btn inc-item-qty" data-id="${item.product.id}">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <button type="button" class="cart-item-remove-btn delete-item-btn" data-id="${item.product.id}" title="حذف من السلة">
                        <i class="fa-solid fa-trash-can"></i> حذف
                    </button>
                </div>
            </div>
        `;
        cartItemsContainer.insertAdjacentHTML("beforeend", itemHtml);
    });

    const deliveryFee = (selectedDeliveryMethod === "delivery" && totalItems > 0) ? 15 : 0;
    const finalTotal = totalPrice + deliveryFee;

    // Update Totals Labels
    cartTotalItems.textContent = totalItems;
    document.getElementById("cart-delivery-fee").textContent = deliveryFee;
    cartTotalPrice.textContent = finalTotal;

    const deliveryFeeRow = document.getElementById("delivery-fee-row");
    if (selectedDeliveryMethod === "pickup" || totalItems === 0) {
        deliveryFeeRow.style.display = "none";
    } else {
        deliveryFeeRow.style.display = "flex";
    }
    
    // Update Badge & bounce animation for attention
    cartBadge.textContent = totalItems;
    cartBadge.style.transform = "scale(1.2)";
    setTimeout(() => {
        cartBadge.style.transform = "scale(1)";
    }, 200);

    setupCartItemEventListeners();
}

// 9. Attach Event Listeners to Cart List Items
function setupCartItemEventListeners() {
    const list = document.getElementById("cart-items-container");
    
    // Decrease buttons
    list.querySelectorAll(".dec-item-qty").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const item = cart.find(i => i.product.id === id);
            const step = id === 11 ? 1 : 0.5;
            if (item) updateCartItemQuantity(id, item.quantity - step);
        });
    });

    // Increase buttons
    list.querySelectorAll(".inc-item-qty").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const item = cart.find(i => i.product.id === id);
            const step = id === 11 ? 1 : 0.5;
            if (item) updateCartItemQuantity(id, item.quantity + step);
        });
    });

    // Delete buttons
    list.querySelectorAll(".delete-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
        });
    });
}

// 10. Open/Close Slide Cart Drawer
function openCartDrawer() {
    cartDrawer.classList.add("open");
    cartDrawerOverlay.classList.add("open");
    document.body.style.overflow = "hidden"; // Disable background scrolling
}

function closeCartDrawer() {
    cartDrawer.classList.remove("open");
    cartDrawerOverlay.classList.remove("open");
    document.body.style.overflow = ""; // Re-enable background scrolling
}

cartToggleBtn.addEventListener("click", openCartDrawer);
cartCloseBtn.addEventListener("click", closeCartDrawer);
cartDrawerOverlay.addEventListener("click", closeCartDrawer);


function clearVodafoneErrors() {
    document.getElementById("screenshot-error").parentNode.classList.remove("invalid");
}

// 12. Copy Vodafone Number Clipboard Logic
copyPhoneBtn.addEventListener("click", () => {
    const num = document.getElementById("vodafone-number").textContent.trim();
    navigator.clipboard.writeText(num).then(() => {
        // Provide premium micro-feedback on copy button
        const originalText = copyPhoneBtn.innerHTML;
        copyPhoneBtn.innerHTML = `<i class="fa-solid fa-check"></i> تم النسخ`;
        copyPhoneBtn.style.background = "var(--success)";
        copyPhoneBtn.style.color = "var(--bg-white)";
        copyPhoneBtn.style.borderColor = "var(--success)";
        
        setTimeout(() => {
            copyPhoneBtn.innerHTML = originalText;
            copyPhoneBtn.style.background = "";
            copyPhoneBtn.style.color = "";
            copyPhoneBtn.style.borderColor = "";
        }, 1500);
    }).catch(err => {
        console.error("Failed to copy phone number: ", err);
    });
});

// 13. Vodafone Cash File Upload Screenshot Preview
vodafoneScreenshotInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        // Validate image files only
        if (!file.type.startsWith("image/")) {
            showToast("يرجى اختيار ملف صورة صالح (PNG, JPG, JPEG).");
            vodafoneScreenshotInput.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            uploadedScreenshotBase64 = event.target.result;
            screenshotPreview.src = uploadedScreenshotBase64;
            screenshotPreviewContainer.style.display = "block";
            
            // Clear upload validation error if visible
            document.getElementById("screenshot-error").parentNode.classList.remove("invalid");
        };
        reader.readAsDataURL(file);
    }
});

// Remove uploaded image preview
removePreviewBtn.addEventListener("click", () => {
    vodafoneScreenshotInput.value = "";
    uploadedScreenshotBase64 = "";
    screenshotPreview.src = "";
    screenshotPreviewContainer.style.display = "none";
});

// 14. Input Validation Logic on Checkout Submit
checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isFormValid = true;

    // 14.1 Validate Name
    const nameVal = customerName.value.trim();
    const nameGroup = customerName.closest(".form-group");
    if (nameVal.length < 3) {
        nameGroup.classList.add("invalid");
        isFormValid = false;
    } else {
        nameGroup.classList.remove("invalid");
    }

    // 14.2 Validate Mobile Number (Egyptian Standard)
    const phoneVal = customerPhone.value.trim();
    const phoneGroup = customerPhone.closest(".form-group");
    // Egyptian phone validation regex: starts with 010, 011, 012, or 015 followed by 8 digits
    const phoneRegex = /^01[0125][0-9]{8}$/;
    if (!phoneRegex.test(phoneVal)) {
        phoneGroup.classList.add("invalid");
        isFormValid = false;
    } else {
        phoneGroup.classList.remove("invalid");
    }

    // 14.3 Validate Delivery Address
    const addressVal = customerAddress.value.trim();
    const addressGroup = document.getElementById("address-group");
    if (selectedDeliveryMethod === "delivery" && addressVal.length < 5) {
        addressGroup.classList.add("invalid");
        isFormValid = false;
    } else {
        addressGroup.classList.remove("invalid");
    }

    // 14.4 Validate Vodafone Cash Screenshot upload
    if (selectedPaymentMethod === "vodafone") {
        const uploadGroup = vodafoneScreenshotInput.closest(".form-group");
        if (!uploadedScreenshotBase64) {
            uploadGroup.classList.add("invalid");
            isFormValid = false;
            
            // Scroll to let the user see the upload area
            cartDrawer.querySelector(".cart-drawer-body").scrollTop = cartDrawer.querySelector(".cart-drawer-body").scrollHeight;
        } else {
            uploadGroup.classList.remove("invalid");
        }
    }

    // 14.5 Trigger Submit Order if all validation rules are met
    if (isFormValid) {
        triggerOrderSubmission();
    }
});

// Real-time error clearance on typing
customerName.addEventListener("input", () => {
    if (customerName.value.trim().length >= 3) {
        customerName.closest(".form-group").classList.remove("invalid");
    }
});

customerPhone.addEventListener("input", () => {
    const phoneRegex = /^01[0125][0-9]{8}$/;
    if (phoneRegex.test(customerPhone.value.trim())) {
        customerPhone.closest(".form-group").classList.remove("invalid");
    }
});

customerAddress.addEventListener("input", () => {
    if (customerAddress.value.trim().length >= 5) {
        document.getElementById("address-group").classList.remove("invalid");
    }
});

// 15. Form Submission & Modal Pop-Up Generation
function triggerOrderSubmission() {
    // 15.1 Populate Client Information
    modalCustName.textContent = customerName.value.trim();
    modalCustPhone.textContent = customerPhone.value.trim();
    modalCustAddress.textContent = customerAddress.value.trim();

    const notesVal = customerNotes.value.trim();
    if (notesVal) {
        modalCustNotes.textContent = notesVal;
        modalCustNotesRow.style.display = "block";
    } else {
        modalCustNotesRow.style.display = "none";
    }

    // 15.2 Populate Products table list
    modalProductsList.innerHTML = "";
    let grandTotal = 0;

    cart.forEach(item => {
        const subtotal = item.product.price * item.quantity;
        grandTotal += subtotal;

        const row = `
            <tr>
                <td><strong>${item.product.name}</strong></td>
                <td>${item.quantity} ${item.product.unit || 'كجم'}</td>
                <td>${item.product.price} ج.م</td>
                <td>${subtotal} ج.م</td>
            </tr>
        `;
        modalProductsList.insertAdjacentHTML("beforeend", row);
    });

    const deliveryFee = selectedDeliveryMethod === "delivery" ? 15 : 0;
    if (deliveryFee > 0) {
        const row = `
            <tr>
                <td colspan="3"><strong>خدمة التوصيل</strong></td>
                <td>${deliveryFee} ج.م</td>
            </tr>
        `;
        modalProductsList.insertAdjacentHTML("beforeend", row);
        grandTotal += deliveryFee;
    }

    modalTotalPriceVal.textContent = grandTotal;

    // 15.3 Populate Payment details
    if (selectedPaymentMethod === "vodafone") {
        modalPaymentMethodVal.innerHTML = `<i class="fa-solid fa-mobile-screen-button"></i> فودافون كاش (محول للرقم <span dir="ltr">+20 101 154 5916</span>)`;
        
        // Show screenshot summary
        modalScreenshotImg.src = uploadedScreenshotBase64;
        modalScreenshotSummary.style.display = "block";
    } else {
        modalPaymentMethodVal.innerHTML = `<i class="fa-solid fa-hand-holding-dollar"></i> الدفع نقداً عند الاستلام (COD)`;
        modalScreenshotSummary.style.display = "none";
        modalScreenshotImg.src = "";
    }

    // 15.4 Launch Modal Popup
    orderModalOverlay.classList.add("open");
}

// 16. Clear Cart & Reset Form upon confirmation closing and send to WhatsApp
modalBtnClose.addEventListener("click", () => {
    // Build WhatsApp Message
    const shopPhone = "201011545916";
    let message = `*طلب جديد من مخبوزات الوليد* 🥐\n\n`;
    
    message += `*بيانات العميل:*\n`;
    message += `الاسم: ${customerName.value.trim()}\n`;
    message += `رقم الهاتف: ${customerPhone.value.trim()}\n`;
    
    if (selectedDeliveryMethod === "delivery") {
        message += `العنوان: ${customerAddress.value.trim()}\n`;
        message += `طريقة الاستلام: توصيل منزلي\n`;
    } else {
        message += `طريقة الاستلام: استلام من المحل\n`;
    }
    
    const notesVal = customerNotes.value.trim();
    if (notesVal) {
        message += `ملاحظات: ${notesVal}\n`;
    }
    
    message += `\n*تفاصيل الطلب:*\n`;
    let grandTotal = 0;
    cart.forEach(item => {
        const subtotal = item.product.price * item.quantity;
        grandTotal += subtotal;
        message += `- ${item.product.name} (الكمية: ${item.quantity} ${item.product.unit || 'كجم'}) - السعر: ${subtotal} ج.م\n`;
    });
    
    const deliveryFee = selectedDeliveryMethod === "delivery" ? 15 : 0;
    if (deliveryFee > 0) {
        message += `\nخدمة التوصيل: ${deliveryFee} ج.م\n`;
        grandTotal += deliveryFee;
    }

    message += `\n*الإجمالي:* ${grandTotal} ج.م\n`;
    
    message += `\n*طريقة الدفع:* `;
    if (selectedPaymentMethod === "vodafone") {
        message += `فودافون كاش\n(يرجى إرفاق صورة إيصال التحويل مع هذه الرسالة 🧾)`;
    } else {
        message += `الدفع عند الاستلام`;
    }

    const whatsappUrl = `https://wa.me/${shopPhone}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    orderModalOverlay.classList.remove("open");
    
    // Clear cart state
    cart = [];
    saveCart();
    updateCartUI();

    // Reset Form Input Controls
    checkoutForm.reset();
    selectedPaymentMethod = "cod";
    uploadedScreenshotBase64 = "";
    screenshotPreview.src = "";
    screenshotPreviewContainer.style.display = "none";
    
    // Reset payment cards selection style
    paymentCards.forEach(c => c.classList.remove("active"));
    document.querySelector("[data-payment='cod']").classList.add("active");
    vodafoneBox.style.display = "none";

    // Close Cart Panel Drawer
    closeCartDrawer();

    showToast("جاري تحويلك للواتساب لإتمام الطلب...");
});

// 17. Micro-Interaction Toast Method
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add("show");
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
