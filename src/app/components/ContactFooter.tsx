"use client";

import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";

export function ContactFooter() {
    return (
        <footer className="bg-neutral-900 border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <span className="text-highlight font-medium mb-4 block">FALE CONOSCO</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Pronto para elevar seu padrão?
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8 max-w-md">
                            Entre em contato para uma consultoria exclusiva. Transformamos sua visão em realidade estruturada.
                        </p>

                        <div className="flex gap-4">
                            {[Instagram, Linkedin, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-highlight hover:text-primary hover:border-highlight transition-all"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-neutral-400">Nome</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/20 border-b border-white/10 p-3 outline-none focus:border-highlight transition-colors text-white placeholder:text-white/20"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-neutral-400">Telefone</label>
                                <input
                                    type="tel"
                                    className="w-full bg-black/20 border-b border-white/10 p-3 outline-none focus:border-highlight transition-colors text-white placeholder:text-white/20"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-neutral-400">Mensagem</label>
                            <textarea
                                rows={4}
                                className="w-full bg-black/20 border-b border-white/10 p-3 outline-none focus:border-highlight transition-colors text-white placeholder:text-white/20 resize-none"
                                placeholder="Conte sobre seu projeto..."
                            />
                        </div>

                        <button className="w-full bg-highlight text-primary font-bold py-4 rounded-xl hover:bg-highlight/90 transition-all flex items-center justify-center gap-2">
                            Enviar Solicitação
                            <ArrowUpRight size={20} />
                        </button>
                    </form>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
                    <p>© {new Date().getFullYear()} Concept Empreiteira. Todos os direitos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
