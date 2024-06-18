// antiMoroccan.js

// الوظيفة الرئيسية لمنع البوت من الاستجابة للرسائل القادمة من الأرقام المغربية
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
    const senderNumber = m.sender.split('@')[0]; // استخراج رقم المرسل
    const isFromMorocco = /^\+212/.test(senderNumber); // التحقق مما إذا كان الرقم المرسل يبدأ بـ +212
    
    // إذا كان الرقم يبدأ بـ +212، فلا تستجب للرسائل
    if (isFromMorocco) {
        return true;
    }
    
    // إذا لم يكن الرقم يبدأ بـ +212، قم بتنفيذ باقي الكود الخاص بك هنا
    // يمكنك وضع الشروط الأخرى لتنفيذ أوامر معينة هنا
    
    return false;
}
