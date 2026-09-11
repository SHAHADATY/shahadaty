/* ==========================================
   شهادتي - النظام الرئيسي
========================================== */

const whatsappNumber = "249993002322";


/* زر ابدأ طلبك */
function startOrder() {

    const servicesSection = document.querySelector(".services");

    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: "smooth"
        });
    }

}


/* الانتقال لصفحة الخدمة */
function goService(serviceType) {

    window.location.href =
        `service.html?type=${encodeURIComponent(serviceType)}`;

}


/* بيانات الخدمات */
const services = {

    basic: {
        title: "استخراج شهادة الأساس",
        description: "أدخل بياناتك المطلوبة بدقة لإرسال طلب استخراج شهادة الأساس.",
        icon: "📄",

        fields: [
            {
                id: "fullName",
                label: "الاسم الكامل",
                type: "text",
                placeholder: "اكتب الاسم الكامل"
            },
            {
                id: "fatherName",
                label: "اسم الوالد",
                type: "text",
                placeholder: "اكتب اسم الوالد"
            },
            {
                id: "seatNumber",
                label: "رقم الجلوس",
                type: "text",
                placeholder: "اكتب رقم الجلوس"
            },
            {
                id: "school",
                label: "اسم المدرسة",
                type: "text",
                placeholder: "اكتب اسم المدرسة"
            },
            {
                id: "state",
                label: "الولاية",
                type: "text",
                placeholder: "اكتب الولاية"
            },
            {
                id: "locality",
                label: "المحلية",
                type: "text",
                placeholder: "اكتب المحلية"
            },
            {
                id: "year",
                label: "الدفعة / السنة",
                type: "text",
                placeholder: "مثال: 2015"
            }
        ]
    },

    secondary: {
        title: "استخراج الشهادة الثانوية",
        description: "أدخل بياناتك المطلوبة بدقة لإرسال طلب استخراج الشهادة الثانوية.",
        icon: "📜",

        fields: [
            {
                id: "fullName",
                label: "الاسم رباعي",
                type: "text",
                placeholder: "اكتب الاسم الرباعي"
            },
            {
                id: "seatNumber",
                label: "رقم الجلوس",
                type: "text",
                placeholder: "اكتب رقم الجلوس"
            },
            {
                id: "center",
                label: "اسم المركز",
                type: "text",
                placeholder: "اكتب اسم المركز"
            },
            {
                id: "year",
                label: "الدفعة / السنة",
                type: "text",
                placeholder: "مثال: 2020"
            },
            {
                id: "state",
                label: "الولاية",
                type: "text",
                placeholder: "اكتب الولاية"
            },
            {
                id: "locality",
                label: "المحلية",
                type: "text",
                placeholder: "اكتب المحلية"
            }
        ]
    },

    university: {
        title: "استخراج الشهادة الجامعية",
        description: "أدخل بياناتك المطلوبة بدقة لإرسال طلب استخراج الشهادة الجامعية.",
        icon: "🎓",

        fields: [
            {
                id: "fullName",
                label: "الاسم رباعي",
                type: "text",
                placeholder: "اكتب الاسم الرباعي"
            },
            {
                id: "studentNumber",
                label: "الرقم الجامعي",
                type: "text",
                placeholder: "اكتب الرقم الجامعي"
            },
            {
                id: "university",
                label: "اسم الجامعة",
                type: "text",
                placeholder: "اكتب اسم الجامعة"
            },
            {
                id: "state",
                label: "الولاية",
                type: "text",
                placeholder: "اكتب الولاية"
            },
            {
                id: "college",
                label: "الكلية",
                type: "text",
                placeholder: "اكتب اسم الكلية"
            },
            {
                id: "specialization",
                label: "التخصص",
                type: "text",
                placeholder: "اكتب التخصص"
            },
            {
                id: "year",
                label: "الدفعة",
                type: "text",
                placeholder: "اكتب الدفعة / السنة"
            }
        ]
    }

};


/* تشغيل نموذج الخدمة */
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("certificateForm");

    if (!form) {
        return;
    }

    const params =
        new URLSearchParams(window.location.search);

    const serviceType =
        params.get("type");

    const titleElement =
        document.getElementById("serviceTitle");

    const descriptionElement =
        document.getElementById("serviceDescription");

    const iconElement =
        document.getElementById("serviceIcon");

    const formFields =
        document.getElementById("formFields");

    if (!services[serviceType]) {

        titleElement.textContent = "الخدمة غير موجودة";

        descriptionElement.textContent =
            "يرجى العودة للصفحة الرئيسية واختيار الخدمة.";

        formFields.innerHTML = "";

        return;
    }

    const service =
        services[serviceType];

    titleElement.textContent =
        service.title;

    descriptionElement.textContent =
        service.description;

    iconElement.textContent =
        service.icon;


    /* إنشاء الحقول */
    formFields.innerHTML = "";

    service.fields.forEach(function (field) {

        const group =
            document.createElement("div");

        group.className =
            "form-group";

        const label =
            document.createElement("label");

        label.setAttribute(
            "for",
            field.id
        );

        label.innerHTML =
            `${field.label} <span class="required">*</span>`;


        const input =
            document.createElement("input");

        input.type =
            field.type;

        input.id =
            field.id;

        input.name =
            field.id;

        input.placeholder =
            field.placeholder;

        input.autocomplete =
            "off";

        input.required =
            true;


        group.appendChild(label);
        group.appendChild(input);

        formFields.appendChild(group);

    });


    /* إرسال الطلب */
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!form.checkValidity()) {

            form.reportValidity();

            return;
        }


        let message = "";

        message +=
            `📋 طلب ${service.title}\n\n`;

        message +=
            `━━━━━━━━━━━━━━━━━━\n\n`;

        message +=
            `👤 بيانات صاحب الطلب\n\n`;


        service.fields.forEach(function (field) {

            const input =
                document.getElementById(field.id);

            const value =
                input.value.trim();

            message +=
                `${field.label}:\n${value}\n\n`;

        });


        const notes =
            document.getElementById("notes").value.trim();


        message +=
            `📝 ملاحظات إضافية:\n`;

        message +=
            `${notes || "لا توجد"}\n\n`;


        message +=
            `━━━━━━━━━━━━━━━━━━\n\n`;

        message +=
            `📎 المستندات المطلوبة:\n`;

        message +=
            `سأقوم بإرفاق الصور والمستندات المطلوبة في نفس المحادثة.\n\n`;

        message +=
            `━━━━━━━━━━━━━━━━━━\n\n`;

        message +=
            `شكراً لاستخدام منصة شهادتي 🌷`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank",
            "noopener"
        );


        const formMessage =
            document.getElementById("formMessage");

        formMessage.textContent =
            "تم تجهيز طلبك بنجاح. سيتم فتح واتساب، وبعدها أرفق الصور والمستندات المطلوبة في نفس المحادثة.";

        formMessage.classList.add("success");

    });

});
