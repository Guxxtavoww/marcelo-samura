'use client';

import { motion } from 'framer-motion';

import { hikariLogoImage } from '@/assets';
import { WantToParticipateButton } from '@/app/_components/want-to-participate-button';

export function Hikari() {
  return (
    <section className="container-wrapper text-center space-y-4" id="hikari">
      <motion.h2
        className="section-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        Hikari
      </motion.h2>
      <motion.h3
        className="text-3xl font-bold text-[#a73520] !mb-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Desenvolvimento Pessoal e Espiritual
      </motion.h3>
      <motion.h4
        className="text-2xl font-bold !mb-6"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        “A Consciência é a chave do despertar espiritual”.
      </motion.h4>
      <motion.img
        src={hikariLogoImage.src}
        alt="Hikari Logo"
        className="mx-auto !mb-10 max-w-[300px]"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      <motion.h4
        className="text-3xl font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Torne-se um Profissional Holístico de Sucesso e Transforme a Sua Vida
        para Sempre!
      </motion.h4>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        A busca pelo desenvolvimento pessoal e conhecimento espiritual, está
        intrínseca na alma de cada ser, porém, algumas relutam em compreender a
        necessidade da sua evolução como ser e acabam se aprisionando no próprio
        corpo biológico, deixam prevalecer a vontade do seu ego e sobrevivem
        mediante crenças materialistas neste planeta terra. Ao longo das páginas
        deste programa, convidamos você a embarcar em uma jornada de
        autodescoberta e de uma profunda transformação interior através do campo
        pessoal e espiritual.
      </motion.p>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Quando um ser humano nasce na dimensão terrena, lhe é dado uma
        nomenclatura com sobrenome, decodificações numéricas para ser
        identificado no contexto social e ao longo do seu desenvolvimento
        humano, se depara com uma realidade de vida totalmente contrária à sua
        verdadeira essência interior. O que traz uma enorme consequência em toda
        a estrutura social, principalmente no que tange, modelação do
        comportamento humano.
      </motion.p>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Infelizmente o aspecto moral e valores altruísta, benevolentes, são cada
        vez mais extintos do sistema de modelar o comportamento das pessoas,
        isso deixa o indivíduo refém de criar uma identidade superficial de si
        mesmo, ou seja, isso o impede de desvendar quem ele é verdadeiramente.
      </motion.p>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        E o que corrobora com isso é o sistema de crença materialista, ele é a
        principal ferramenta que limita o desenvolvimento espiritual e pessoal
        do indivíduo. Infelizmente, o sistema deixa as pessoas cegas de
        compreender a verdade de quem somos nós? De onde viemos? O que é o amor?
        Quem é Deus? Por qual razão nasceu em determinada família? Estes e
        tantos outros questionamentos deveriam ocorrer de forma natural, mas, na
        prática o que vemos é uma gigantesca população de seres humanos
        manipulados e perdidos no próprio jogo egóico materialista e distantes
        do campo da espiritualidade. Diante de um enorme problema social e de
        uma cegueira espiritual, elaboramos este curso com o objetivo de
        fornecer as ferramentas, teóricas e práticas, necessárias para ajudá-lo
        a se reconectar com a sua essência mais autêntica, ter uma percepção das
        suas habilidades e competências de forma genuína, explorar os seus
        talentos únicos e desabrochar em ti o seu poder criativo.
      </motion.p>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        O curso fará você aprender a rasgar o véu e te demonstrará a percepção
        do que cessa o seu despertar da sua consciência, além de uma visão mais
        profunda sobre campo da espiritualidade. &quot;Hikari&quot; (光) é uma
        palavra japonesa que significa &quot;luz&quot;. Este termo é usado tanto
        em um sentido literal, para se referir à luz física, quanto em um
        sentido figurado, para expressar conceitos abstratos relacionados à
        iluminação espiritual, clareza ou brilho. A palavra &quot;Hikari&quot;
        também pode ter conotações poéticas e espirituais na língua japonesa,
        muitas vezes associada à ideia de iluminação interior ou
        espiritualidade.
      </motion.p>
      <motion.h4
        className="text-3xl font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        PERMITA-SE VIVER ALGO <br />
        TRANSCENDENTE EM SUA VIDA.
      </motion.h4>
      <WantToParticipateButton />
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        O Curso Hikari, foi fundado e desenvolvido pelo mestre Marcello Samura,
        Empresário, formado em Gestão de Recursos Humanos, Pós Graduado em
        Administração de Empresas, MBA em Marketing e Vendas, Mestre em Reiki,
        Fluxoterapeuta, Diretor Executivo da empresa Grupo Samura, fundador e
        idealizador do Instituto Samura. Uma jornada única baseada em três
        décadas de experiência no mundo dos negócios e gestão de pessoas.
        Durante este curso, vamos explorar estratégias comprovadas, insights
        valiosos e lições aprendidas ao longo da sua carreira de sucesso no
        mundo empresarial. Ele desenvolveu uma metodologia eficaz que visa
        trabalhar com a parte comportamental e espiritual do ser humano.
      </motion.p>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        Nosso objetivo é mesclar a vivencia diária do mundo material com o mundo
        espiritual, além de ofertar a você um conjunto abrangente de ferramentas
        e recursos que o capacitem a se transformarem em profissionais
        “Instrumentos Divinos” holísticos Hikarianos, transbordando o
        conhecimento divino de forma verdadeira.
      </motion.p>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        Este curso não é apenas sobre adquirir conhecimento intelectual e
        espiritual, mas para transformar a vida das pessoas e libertar a alma
        delas para uma nova percepção de vida, oculta da humanidade. Estamos
        aqui para apoiá-lo, orientá-lo e celebrar os seus sucessos ao longo do
        caminho. Juntos, vamos explorar as profundezas de nossa alma e despertar
        para a plenitude e a beleza de quem realmente somos. Que este curso
        norteie você Hikariano para a sua jornada interior, guiando-o em direção
        a uma vida de significado, conexão e realização. Estamos ansiosos para
        testemunhar a sua jornada de transformação e crescimento. Que você possa
        encontrar inspiração, sabedoria e amor em cada passo do caminho. Uma
        nova jornada divina se inicia agora.
      </motion.p>
      <motion.h4
        className="text-3xl font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        CURSO HIKARI <br />
        TRANSFORMANDO VIDAS E CURANDO ALMAS.
      </motion.h4>
      <WantToParticipateButton />
      <motion.h2
        className="section-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        Sobre o Inovador Curso Hikari
      </motion.h2>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Você já imaginou ter uma carreira que não apenas lhe traz sucesso
        financeiro, mas também enriquece sua alma e impacta positivamente a vida
        das pessoas ? Bem-vindo ao Curso de Desenvolvimento Pessoal e
        Espiritual, a chave para desbloquear uma profissão holística de sucesso
        e alcançar a prosperidade verdadeira!
      </motion.p>
      <motion.p
        className="font-bold leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Por que você deve participar deste curso?
      </motion.p>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Transformação Pessoal Completa, Desenvolva habilidades essenciais para o
        crescimento pessoal e espiritual, promovendo um equilíbrio harmonioso
        entre mente, corpo e espírito. Carreira de Sucesso: Torne-se um
        profissional holístico certificado, capaz de ajudar outras pessoas a
        alcançar seu potencial máximo enquanto constrói uma carreira
        gratificante e lucrativa.
      </motion.p>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Ferramentas Holísticas Comprovadas: Aprenda técnicas avançadas de
        meditação, Reiki, aromaterapia, uso de cristais, e muito mais, com
        instrutores experientes e dedicados.
      </motion.p>
      <p className="font-bold leading-8 text-lg">O que você vai ganhar?</p>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Autoconhecimento Profundo: Compreenda melhor suas próprias necessidades
        e desejos, desenvolvendo uma conexão profunda consigo mesmo. Habilidades
        Práticas: Domine práticas holísticas que você pode aplicar imediatamente
        para transformar sua vida e a vida de seus clientes. Suporte Contínuo:
        Tenha acesso a uma comunidade de apoio e mentoria personalizada para
        garantir seu sucesso contínuo.
      </motion.p>
      <p className="font-bold leading-8 text-lg">Quem deve participar?</p>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Profissionais em Busca de Mudança: Se você está insatisfeito com sua
        carreira atual e busca uma mudança significativa que alinhe o seu
        trabalho com seus valores pessoais, este é o seu novo caminho.
        Apaixonados por Bem-Estar: Pessoas que desejam aprofundar seus
        conhecimentos em práticas holísticas e fazer uma diferença real na vida
        dos outros. Empreendedores de Coração: Aqueles que sonham em iniciar seu
        próprio negócio no crescente campo do bem-estar e desenvolvimento
        pessoal.
      </motion.p>
      <motion.p
        className="font-medium leading-8 text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Não perca esta oportunidade única de transformar sua vida e carreira!
        Ligue agora no Curso de Desenvolvimento Pessoal e Espiritual e comece
        sua jornada rumo ao sucesso holístico e à prosperidade verdadeira. Sua
        nova vida começa aqui!
      </motion.p>
      <WantToParticipateButton />
    </section>
  );
}
