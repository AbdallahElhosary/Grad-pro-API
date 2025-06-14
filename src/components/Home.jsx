import React from 'react';
import { BookOpen, Users, Calendar, Award, ChevronRight, Phone, Mail, MapPin, Star } from 'lucide-react';

export default function Component() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
            

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">
                        مرحباً بك في <span className="text-blue-600">المرشد الأكاديمي</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        دليلك الشامل للنجاح الأكاديمي في كلية الحاسبات والمعلومات بجامعة بنها. نقدم لك المشورة والإرشاد لتحقيق أهدافك التعليمية
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition duration-300 flex items-center justify-center">
                            ابدأ رحلتك الأكاديمية
                            <ChevronRight className="mr-2" size={20} />
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition duration-300">
                            تعرف على الخدمات
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">خدماتنا الأكاديمية</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <BookOpen className="mb-4" size={48} />
                            <h4 className="text-xl font-bold mb-3">الإرشاد الأكاديمي</h4>
                            <p>نصائح وتوجيهات لاختيار التخصص والمقررات المناسبة لك</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <Users className="mb-4" size={48} />
                            <h4 className="text-xl font-bold mb-3">الدعم الطلابي</h4>
                            <p>مساعدة في التغلب على التحديات الأكاديمية والشخصية</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <Calendar className="mb-4" size={48} />
                            <h4 className="text-xl font-bold mb-3">التخطيط الأكاديمي</h4>
                            <p>وضع جدول زمني لإنهاء الدراسة وتحقيق الأهداف</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <Award className="mb-4" size={48} />
                            <h4 className="text-xl font-bold mb-3">التطوير المهني</h4>
                            <p>إرشادات لتطوير المهارات والاستعداد لسوق العمل</p>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* Testimonials Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">آراء طلابنا</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">"المرشد الأكاديمي ساعدني كثيراً في اختيار التخصص المناسب وتنظيم دراستي"</p>
                            <div className="font-bold">أحمد محمد - طالب علوم حاسب</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">"الدعم والتوجيه الذي حصلت عليه كان لا يقدر بثمن في رحلتي الجامعية"</p>
                            <div className="font-bold">فاطمة أحمد - طالبة نظم معلومات</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">"التخطيط الأكاديمي ساعدني في إنهاء دراستي في الوقت المحدد بتفوق"</p>
                            <div className="font-bold">محمد علي - طالب تكنولوجيا معلومات</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">تواصل معنا</h3>
                            <p className="text-gray-300 mb-8">نحن هنا لمساعدتك في رحلتك الأكاديمية. لا تتردد في التواصل معنا</p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Phone className="ml-4" size={24} />
                                    <span>013-3228948</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="ml-4" size={24} />
                                    <span>info@fci.bu.edu.eg</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="ml-4" size={24} />
                                    <span>شارع الشهيد فريد ندا، بنها، القليوبية</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-700 p-8 rounded-xl">
                            <h4 className="text-2xl font-bold mb-6">احجز موعد للإرشاد</h4>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="الاسم الكامل"
                                    className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-300"
                                />
                                <input
                                    type="email"
                                    placeholder="البريد الإلكتروني"
                                    className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-300"
                                />
                                <select className="w-full p-3 rounded-lg bg-gray-600 text-white">
                                    <option>اختر التخصص</option>
                                    <option>علوم الحاسب</option>
                                    <option>نظم المعلومات</option>
                                    <option>تكنولوجيا المعلومات</option>
                                </select>
                                <textarea
                                    placeholder="اكتب رسالتك هنا"
                                    rows={4}
                                    className="w-full p-3 rounded-lg bg-gray-600 text-white placeholder-gray-300"
                                ></textarea>
                                <button
                                    type="button"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition duration-300"
                                >
                                    إرسال الطلب
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-blue-600 text-white p-2 rounded-lg ml-3">
                                <BookOpen size={24} />
                            </div>
                            <span className="text-xl font-bold">المرشد الأكاديمي - كلية الحاسبات والمعلومات</span>
                        </div>
                        <p className="text-gray-400 mb-4">جامعة بنها - مصر</p>
                        <div className="border-t border-gray-700 pt-4">
                            <p className="text-gray-500">© 2025 جميع الحقوق محفوظة - كلية الحاسبات والمعلومات</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
