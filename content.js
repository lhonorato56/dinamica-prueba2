/* ============================================================
   DinamiAcademy · content.js — TODO el contenido del Prueba 2 de Dinámica
   FIS1514 (UC). Basado en el análisis de Interrogaciones 2 (I2) reales
   (2021–2024), ayudantías 6–12, talleres 4–6, el Compilado de S. Urrutia y las
   clases 11–15. Enunciados de pruebas/ayudantías transcritos TAL CUAL.
   Temario: Newton (énfasis), Trabajo y Energía (incl. MAS), Impulso y Momentum.
   Convención del curso: g = 10 m/s² (a veces 9,8). sin37°≈0,6 cos37°≈0,8.
   NOTA LaTeX: $...$ inline y $$...$$ display. Comandos con doble backslash.
   No usar apóstrofo ' dentro de strings con comillas simples (usar \\prime).
   ============================================================ */

const CONTENT = {
  blocks: {
    repaso:   { label: '🔧 Antes de empezar', sub: 'Cómo usar esta página, cómo estudiar física, qué memorizar, y el repaso mínimo. Léelo primero.' },
    newton:   { label: '🟦 Newton · la base de todo', sub: 'DCL, fuerzas, roce, planos, poleas y movimiento circular. El temario dice "énfasis en Newton": aquí está.' },
    energia:  { label: '⚡ Trabajo, energía y MAS · el corazón de la Prueba 2', sub: 'El tema que MÁS cae. Trabajo-energía, conservación con roce, y movimiento armónico simple.' },
    momentum: { label: '💥 Impulso y momentum', sub: 'Impulso, conservación del momentum y choques (elásticos e inelásticos).' },
    extra:    { label: '🏁 Para llegar listo', sub: 'Simulacro tipo Prueba 2 real, formulario para memorizar y el plan de estudio día a día.' }
  },
  units: []
};
function U(o) { CONTENT.units.push(o); }

/* =====================================================================
   UNIDAD 0 — CÓMO USAR, CÓMO ESTUDIAR Y REPASO
   ===================================================================== */
U({
  id: 'u0', block: 'repaso', prio: 0, icon: '🔧',
  tag: 'Unidad 0 · Empieza aquí',
  title: 'Cómo usar esto y cómo estudiar',
  badge: { text: 'empieza aquí', cls: 'pill-new' },
  desc: 'Cómo funciona la página, cómo estudiar física para el viernes, qué memorizar vs entender, y el repaso mínimo (vectores, DCL, trigonometría, g=10).',
  lessons: [
    {
      id: 'u0l1', title: 'Cómo usar esta página y cómo estudiar para el viernes',
      blocks: [
        { t: 'p', html: 'Hola 👋 Vas a estudiar SOLO de aquí, así que está armado para llevarte de la mano hasta el Prueba 2. Lee esto corto y arrancamos.' },
        { t: 'box', kind: 'peras', title: 'Cómo funciona', html: '<b>Unidades:</b> en el inicio están ordenadas por lo que MÁS cae. Entra a una y verás sus lecciones.<br><b>Tres pestañas por unidad:</b> 📖 <b>Lecciones</b> (teoría + ejercicios resueltos), 🎴 <b>Tarjetas</b> (memorizar fórmulas, tócalas para girarlas) y ✅ <b>Quiz</b> (chequear que entendiste).<br><b>Ejercicios con enunciado REAL:</b> cada ejercicio trae el enunciado <b>tal cual sale en pruebas/ayudantías</b> (para que te acostumbres al lenguaje), y la solución está escondida en "▸ Ver solución". <b>Intenta tú primero en papel</b>, después la abres.<br><b>Tu progreso se guarda solo</b> en el navegador (racha 🔥, nota, lecciones hechas).' },
        { t: 'box', kind: 'def', title: 'Cómo estudiar física (la única forma que funciona)', html: '<b>1. Física NO se memoriza leyendo: se aprende resolviendo.</b> Por cada tema, haz los ejercicios TÚ en papel antes de ver la solución.<br><b>2. Siempre parte por el DIBUJO y el DCL</b> (diagrama de cuerpo libre): dibuja el cuerpo, todas las fuerzas, y los ejes. El 80% de los errores se evitan con un buen DCL.<br><b>3. Identifica el método por las palabras clave</b> (los "gatillos", ver lección siguiente): ¿piden velocidad/altura sin tiempo? → energía. ¿piden fuerza/aceleración instantánea? → Newton. ¿hay choque? → momentum.<br><b>4. Cierra con el formulario</b> (Unidad 8) y el simulacro cronometrado.' },
        { t: 'box', kind: 'exam', title: 'Plan corto (tienes hasta el viernes)', html: '<b>Hoy/mañana:</b> U0 + U1 (Newton/DCL) + U4 y U5 (energía, lo que MÁS cae). Haz los quizzes.<br><b>Día siguiente:</b> U2 (planos/poleas) + U3 (circular) + U6 (MAS).<br><b>Penúltimo día:</b> U7 (impulso/momentum) + repasar ejercicios difíciles.<br><b>Víspera:</b> formulario (U8) + simulacro completo cronometrado.<br>Meta: necesitas sobre 5. Si dominas energía, Newton con poleas y MAS, ya estás sobre la línea. 💪' }
      ]
    },
    {
      id: 'u0l1b', title: 'Qué sale MÁS en la prueba (con porcentajes)',
      blocks: [
        { t: 'p', html: 'Esto es para que decidas dónde poner tus horas. Conté los temas de <b>19 problemas de pruebas reales</b> (Interrogaciones 2 de 2021–2024 + tu Control 2 2026). Los porcentajes son aproximados y algunos problemas mezclan temas, pero la foto es clarísima.' },
        { t: 'ftable', head: ['Tema', '≈ % de los problemas', 'Dónde está'], rows: [
          ['<b>Energía y trabajo</b> (conservación, resortes, roce)', '≈ 37%', 'U4 + U5 ⭐'],
          ['<b>Newton / DCL</b> (roce, sistemas acelerados, guías)', '≈ 26%', 'U1 + U3'],
          ['<b>Movimiento circular</b> (centrípeto, polares, cono, rizo)', '≈ 21%', 'U3'],
          ['<b>Ligaduras y poleas</b> (relación 2:1)', '≈ 11%', 'U2'],
          ['<b>MAS</b> (oscilaciones)', '≈ 11%', 'U6'],
          ['<b>Impulso y momentum</b> (choques)', '≈ 5%', 'U7']
        ]},
        { t: 'box', kind: 'def', title: 'La foto en grande (dos mitades)', html: 'Casi todo se reparte en dos familias de tamaño parecido:<br><b>• Familia NEWTON</b> (DCL, roce, sistemas acelerados, circular, poleas) ≈ <b>50%</b>.<br><b>• Familia ENERGÍA</b> (trabajo, conservación con roce, MAS) ≈ <b>47%</b>.<br><b>• Impulso/momentum</b> casi no cae en las pruebas (≈5%), aunque ESTÁ en el temario. No lo ignores, pero estúdialo al final.' },
        { t: 'box', kind: 'warn', title: '🎯 Lo más probable según TU Control 2 (estúdialo sí o sí)', html: 'Tu Control 2 del 15-may-2026 fue una <b>argolla en una varilla/guía circular con un resorte</b>: te pidieron DCL, la <b>fuerza de contacto (normal)</b> y la <b>aceleración</b>, resolviendo con <b>Newton + aceleración centrípeta</b> (no con energía). Como a todo el curso le fue mal, es MUY probable que la Prueba repita ese tipo. Está resuelto paso a paso en la <b>Unidad 3</b> (y la versión con energía, en la U5). Domina ese problema.' },
        { t: 'box', kind: 'peras', title: 'Si tienes que priorizar', html: 'Con <b>Energía (U5) + Newton en guías y circular (U1 + U3)</b> cubres cerca del <b>70%</b> de lo que cae. Súmale <b>poleas (U2)</b> y <b>MAS (U6)</b> y llegas al ~95%. Deja impulso/momentum (U7) para el final.' }
      ]
    },
    {
      id: 'u0l2', title: 'Qué MEMORIZAR, qué ENTENDER y qué NO memorizar',
      blocks: [
        { t: 'p', html: 'No todo pesa igual. Esto te ahorra horas: hay cosas que deben salir sin pensar, otras que solo debes entender para deducirlas, y otras que NO vale la pena memorizar.' },
        { t: 'box', kind: 'form', title: '🧠 MEMORIZAR de memoria (deben salir solas)', html: '• $\\vec F_{neta}=m\\vec a$ y cómo hacer un DCL.<br>• Roce: $f_s\\le\\mu_s N$ (estático), $f_k=\\mu_k N$ (cinético, opuesto al movimiento).<br>• En plano inclinado $\\theta$: peso se parte en $mg\\sin\\theta$ (baja el plano) y $mg\\cos\\theta$ (contra la normal); $N=mg\\cos\\theta$.<br>• Trabajo-energía: $W_{tot}=\\Delta K=\\tfrac12 mv_f^2-\\tfrac12 mv_i^2$.<br>• Energías: $K=\\tfrac12 mv^2$, $U_g=mgh$, $U_e=\\tfrac12 kx^2$.<br>• Con roce: $E_f-E_i=W_{nc}$, con $W_{roce}=-\\mu_k N\\,d$.<br>• MAS: $\\omega=\\sqrt{k/m}$, $T=2\\pi\\sqrt{m/k}$, $x(t)=A\\cos(\\omega t+\\phi)$, $v_{max}=A\\omega$, $a_{max}=A\\omega^2$, $E=\\tfrac12 kA^2$.<br>• Momentum: $\\vec p=m\\vec v$; impulso $\\vec J=\\int\\vec F\\,dt=\\Delta\\vec p$; conservación $\\sum m\\vec v$ antes $=\\sum m\\vec v$ después.<br>• Aceleración en polares: $\\vec a=(\\ddot r-r\\dot\\theta^2)\\hat u_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\hat u_\\theta$ (te la suelen dar de hint, pero apréndela).' },
        { t: 'box', kind: 'def', title: '💡 ENTENDER (no memorizar, deducir)', html: '• Por qué el roce es no conservativo (depende del camino) y el peso/resorte sí.<br>• Cómo se arma una ligadura de poleas (largo de cuerda constante, derivar dos veces) — la famosa relación $a_1=2a_2$.<br>• Por qué $g$ NO entra en $\\omega$ del MAS (la gravedad solo corre el punto de equilibrio).<br>• Cuándo el momentum se conserva (sin fuerzas externas / durante un choque breve) y cuándo NO la energía cinética (choque inelástico).<br>• Cómo elegir entre energía y Newton según lo que te piden.' },
        { t: 'box', kind: 'warn', title: '🚫 NO pierdas tiempo memorizando', html: '• Resultados particulares de un ejercicio (ej. "$F=13mg/4$"): salen de aplicar el método.<br>• Fórmulas que se deducen en 2 líneas (ej. Atwood $a=(m_1-m_2)g/(m_1+m_2)$): mejor saber armarlas.<br>• Valores numéricos raros. En la prueba te dan los datos.<br>El curso usa $g=10\\,\\mathrm{m/s^2}$ (a veces $9{,}8$). Usa $g=10$ salvo que digan otra cosa.' }
      ]
    },
    {
      id: 'u0l3', title: 'Los "gatillos": cómo saber qué método usar',
      blocks: [
        { t: 'p', html: 'La diferencia entre quedarse pegado y resolver rápido es leer el enunciado y reconocer el método. Estas palabras clave te lo gritan:' },
        { t: 'ftable', head: ['Si el enunciado dice…', 'Usa…'], rows: [
          ['"velocidad/rapidez en tal punto", "altura máxima", "comprime el resorte", y NO piden tiempo', 'ENERGÍA (trabajo-energía o conservación)'],
          ['"sin roce" / "superficie lisa"', 'Energía SE CONSERVA: $E_i=E_f$'],
          ['"con roce cinético μ" y piden velocidad/distancia', 'Energía con $E_f-E_i=W_{nc}$, $W_{roce}=-\\mu N d$'],
          ['"aceleración", "tensión", "fuerza" en un instante', 'NEWTON: $\\sum\\vec F=m\\vec a$ + DCL'],
          ['"¿se mueve o no?", "mínimo coeficiente", "justo antes de deslizar"', 'NEWTON con roce ESTÁTICO máximo $f_s=\\mu_s N$'],
          ['"poleas", "cuerda inextensible", relaciona aceleraciones', 'LIGADURA (largo cuerda cte) + Newton'],
          ['"gira", "circular", "rizo/loop", "cono", dan $\\dot\\theta$', 'CIRCULAR: $a_c=v^2/R=\\omega^2 R$, polares'],
          ['"apenas completa el rizo", "a punto de despegarse"', 'Condición $N=0$ (en el rizo: $v^2=gR$ arriba)'],
          ['"oscila", "período", "frecuencia", "resorte y vuelve"', 'MAS: $\\omega=\\sqrt{k/m}$'],
          ['"choca", "colisión", "queda pegado", "rebota"', 'MOMENTUM: $\\sum m\\vec v$ se conserva'],
          ['"choque elástico"', 'Momentum Y energía cinética se conservan'],
          ['"quedan pegados" / "perfectamente inelástico"', 'Solo momentum (K NO se conserva)']
        ]},
        { t: 'box', kind: 'peras', html: 'Regla de oro: <b>si te piden algo "en un instante" (fuerza, aceleración, tensión) es Newton; si te piden algo "entre dos puntos" (velocidad, altura, compresión) sin tiempo, es energía; si hay un golpe/choque, es momentum.</b> Muchos problemas combinan dos (ej. energía para llegar al choque, momentum en el choque, energía después).' }
      ]
    },
    {
      id: 'u0l4', title: 'Repaso mínimo: vectores, DCL, plano inclinado y trigonometría',
      blocks: [
        { t: 'p', html: 'Tres herramientas que vas a usar en CADA problema. Si esto sale solo, todo lo demás fluye.' },
        { t: 'h3', html: 'Diagrama de cuerpo libre (DCL)' },
        { t: 'box', kind: 'def', title: 'Cómo hacer un DCL (siempre el primer paso)', html: '1) Aísla UN cuerpo y dibújalo como un puntito o caja.<br>2) Dibuja TODAS las fuerzas que actúan SOBRE él (no las que él ejerce): peso $m\\vec g$ (siempre, hacia abajo), normal $\\vec N$ (perpendicular a la superficie), tensión $\\vec T$ (a lo largo de la cuerda, saliendo del cuerpo), roce $\\vec f$ (paralelo a la superficie, opuesto al movimiento o tendencia), resorte $\\vec F_e$ (hacia el equilibrio), fuerzas aplicadas.<br>3) Elige ejes (en plano inclinado: uno paralelo y otro perpendicular al plano).<br>4) Escribe $\\sum F_x=ma_x$ y $\\sum F_y=ma_y$.' },
        { t: 'box', kind: 'warn', html: 'Errores típicos de DCL: poner fuerzas que el cuerpo ejerce sobre otros (no van), inventar una "fuerza de movimiento" (no existe), u olvidar la normal o el roce. Solo van fuerzas reales de contacto + peso.' },
        { t: 'h3', html: 'Plano inclinado: la descomposición que SIEMPRE se usa' },
        { t: 'box', kind: 'form', title: 'Peso en un plano de ángulo θ', html: 'Con ejes paralelo (x, hacia abajo del plano) y perpendicular (y):$$\\text{componente que baja}=mg\\sin\\theta,\\qquad \\text{componente contra la normal}=mg\\cos\\theta$$ Si no hay aceleración perpendicular: $N=mg\\cos\\theta$.' },
        { t: 'box', kind: 'peras', html: 'Cómo no confundir seno y coseno: cuando el plano está casi plano ($\\theta\\to0$), casi no hay fuerza que te haga bajar, y $\\sin0=0$ ✓; la normal casi aguanta todo el peso, y $\\cos0=1$ ✓. Entonces <b>la que baja lleva seno, la normal lleva coseno</b>.' },
        { t: 'h3', html: 'Trigonometría que debes tener a mano' },
        { t: 'ftable', head: ['Ángulo', 'sin', 'cos'], rows: [
          ['$30°$', '$0{,}5$', '$\\approx0{,}87$'],
          ['$37°$', '$\\approx0{,}6$', '$\\approx0{,}8$'],
          ['$45°$', '$\\tfrac{1}{\\sqrt2}\\approx0{,}71$', '$\\tfrac{1}{\\sqrt2}\\approx0{,}71$'],
          ['$53°$', '$\\approx0{,}8$', '$\\approx0{,}6$'],
          ['$60°$', '$\\approx0{,}87$', '$0{,}5$']
        ]},
        { t: 'box', kind: 'peras', html: 'El triángulo <b>3-4-5</b> aparece todo el rato: si $\\tan\\theta=3/4$ entonces $\\sin\\theta=3/5=0{,}6$ y $\\cos\\theta=4/5=0{,}8$ (eso es $37°$). Si ves un 3-4-5 o un $\\tan\\theta=3/4$, ya tienes seno y coseno sin calculadora.' },
        { t: 'fig', svg: FIG.incline({deg:30,mu:true,cap:'Bloque en un plano que se inclina hasta que empieza a deslizar.'}) },
        { t: 'box', kind: 'example', title: 'Mini-ejemplo: bloque que apenas no desliza', html: 'Un bloque en un plano se inclina hasta que justo empieza a deslizar en $\\theta=\\alpha^*$. ¿Cuánto vale $\\mu_s$? <b>Solución:</b> justo antes de deslizar, $f_s=\\mu_s N$ y equilibrio: $mg\\sin\\alpha^*=\\mu_s\\,mg\\cos\\alpha^*\\Rightarrow \\boxed{\\mu_s=\\tan\\alpha^*}$. (Es una pregunta real del compilado.)' }
      ]
    }
  ],
  flashcards: [
    { q: '¿Cuál es SIEMPRE el primer paso de un problema de Newton?', a: 'Dibujar el DCL: aislar el cuerpo y poner todas las fuerzas reales (peso, normal, tensión, roce, aplicadas) y los ejes.' },
    { q: 'En un plano inclinado θ, ¿cómo se parte el peso?', a: '$mg\\sin\\theta$ baja por el plano, $mg\\cos\\theta$ va contra la normal. Si no acelera perpendicular: $N=mg\\cos\\theta$.' },
    { q: '¿La que baja el plano lleva seno o coseno?', a: 'Seno ($mg\\sin\\theta$). La normal lleva coseno. (Chequeo: plano plano ⇒ no baja nada, $\\sin0=0$.)' },
    { q: 'Si te piden velocidad/altura SIN pedir tiempo, ¿qué método?', a: 'Energía (trabajo-energía o conservación).' },
    { q: 'Si te piden fuerza/aceleración/tensión en un instante, ¿qué método?', a: 'Newton: $\\sum\\vec F=m\\vec a$ con DCL.' },
    { q: 'Si hay un choque, ¿qué se conserva siempre?', a: 'El momentum total $\\sum m\\vec v$ (la energía cinética solo si es elástico).' },
    { q: 'Triángulo 3-4-5: si $\\tan\\theta=3/4$, ¿sin y cos?', a: '$\\sin\\theta=0{,}6$, $\\cos\\theta=0{,}8$ (es 37°).' },
    { q: '¿Qué valor de g usa el curso?', a: '$g=10\\,\\mathrm{m/s^2}$ (a veces $9{,}8$). Usa 10 salvo que digan otra cosa.' }
  ],
  quiz: [
    { type: 'comp', q: 'Un problema dice "sin roce, ¿con qué rapidez llega al punto B?". El método más directo es:', opts: ['Newton instante a instante', 'Conservación de energía', 'Momentum', 'Cinemática con tiempo'], answer: 1, explain: 'Piden rapidez entre dos puntos sin tiempo y sin roce: energía se conserva, $E_i=E_f$.' },
    { type: 'alt', q: 'En un plano inclinado θ sin aceleración perpendicular, la normal vale:', opts: ['$mg$', '$mg\\sin\\theta$', '$mg\\cos\\theta$', '$mg\\tan\\theta$'], answer: 2, explain: 'La normal equilibra la componente perpendicular del peso: $N=mg\\cos\\theta$.' },
    { type: 'vf', q: 'En un DCL se dibujan también las fuerzas que el cuerpo ejerce sobre otros.', opts: ['Verdadero', 'Falso'], answer: 1, explain: 'Falso: en el DCL solo van las fuerzas que actúan SOBRE el cuerpo aislado.' },
    { type: 'comp', q: 'Te piden "el mínimo μ para que el sistema no se mueva". Usas:', opts: ['Roce cinético $f=\\mu_k N$', 'Roce estático máximo $f_s=\\mu_s N$', 'Energía', 'Momentum'], answer: 1, explain: 'En el borde de moverse se usa el roce estático en su valor máximo $f_s=\\mu_s N$.' }
  ]
});
/* =====================================================================
   UNIDAD 1 — LEYES DE NEWTON, DCL Y ROCE
   ===================================================================== */
U({
  id: 'u1', block: 'newton', prio: 3, icon: '🟦',
  tag: 'Unidad 1 · Newton y DCL',
  title: 'Leyes de Newton y roce',
  badge: { text: 'la base', cls: 'pill-hot' },
  desc: 'Las tres leyes, el DCL, los tipos de fuerza, y el roce estático vs cinético. Incluye el clásico "¿se mueve o no?", sistemas acelerados y velocidad terminal.',
  lessons: [
    {
      id: 'u1l1', title: 'Las tres leyes y los tipos de fuerza',
      blocks: [
        { t: 'p', html: 'Toda la dinámica de Newton se reduce a una frase: la fuerza neta sobre un cuerpo es su masa por su aceleración. Lo difícil no es la fórmula, es <b>identificar bien las fuerzas</b> (el DCL).' },
        { t: 'box', kind: 'form', title: 'Las tres leyes', html: '<b>1ª (inercia):</b> si $\\sum\\vec F=0$, el cuerpo sigue con velocidad constante (o quieto).<br><b>2ª:</b> $\\sum\\vec F=m\\vec a$ — la ley reina.<br><b>3ª (acción-reacción):</b> $\\vec F_{AB}=-\\vec F_{BA}$ — si A empuja a B, B empuja a A con igual fuerza y sentido opuesto.' },
        { t: 'box', kind: 'def', title: 'Los tipos de fuerza que verás', html: '<b>Peso</b> $\\vec W=m\\vec g$: siempre vertical hacia abajo, magnitud $mg$.<br><b>Normal</b> $\\vec N$: perpendicular a la superficie, empuja (nunca tira), $N\\ge0$.<br><b>Tensión</b> $\\vec T$: a lo largo de la cuerda, siempre TIRA del cuerpo (sale de él).<br><b>Roce</b> $\\vec f$: paralelo a la superficie, se opone al movimiento o a la tendencia a moverse.<br><b>Resorte</b> (Hooke) $\\vec F_e=-k\\,x$: hacia el equilibrio, magnitud $k|\\Delta\\ell|$ con $\\Delta\\ell$ la deformación.<br><b>Aplicada</b> $\\vec F$: la que diga el problema.' },
        { t: 'box', kind: 'form', title: 'Newton por componentes (la receta)', html: '$$\\sum F_x=ma_x,\\qquad \\sum F_y=ma_y$$ Elige ejes cómodos (en plano inclinado, paralelo y perpendicular al plano). Si el cuerpo no se mueve en un eje, ahí $a=0$.' },
        { t: 'box', kind: 'peras', html: 'Con peras: la 2ª ley es como el precio de una aceleración. Para acelerar más ($a$ grande) o mover algo más pesado ($m$ grande), necesitas más fuerza neta. Y "neta" significa la SUMA de todas, con sus direcciones: dos fuerzas iguales y opuestas se cancelan y no aceleran nada.' }
      ]
    },
    {
      id: 'u1l2', title: 'Roce estático vs cinético, y "¿se mueve o no?"',
      blocks: [
        { t: 'p', html: 'El roce es la fuente #1 de confusión. Hay dos tipos y se usan en momentos distintos.' },
        { t: 'box', kind: 'form', title: 'Roce estático y cinético', html: '<b>Estático</b> (cuerpo quieto): $f_s\\le\\mu_s N$. Es una fuerza que se "acomoda" para impedir el movimiento, hasta un máximo $\\mu_s N$.<br><b>Cinético</b> (cuerpo deslizando): $f_k=\\mu_k N$, valor FIJO, opuesto a la velocidad.' },
        { t: 'box', kind: 'warn', title: 'La trampa del roce estático', html: 'El roce estático NO siempre vale $\\mu_s N$: vale lo justo para mantener el equilibrio, y solo llega a $\\mu_s N$ <b>justo cuando el cuerpo está a punto de deslizar</b>. Por eso, para "¿se mueve?" comparas la fuerza que empuja contra el máximo $\\mu_s N$: si la supera, se mueve (y ahí usas $\\mu_k$).' },
        { t: 'box', kind: 'def', title: 'Receta "¿se mueve o no?"', html: '1) Supón que está quieto. 2) Calcula la fuerza neta que TIENDE a moverlo (ej. $m g\\sin\\theta$, o una fuerza aplicada). 3) Calcula el roce estático máximo $\\mu_s N$. 4) Si fuerza que empuja $>\\mu_s N$ ⇒ <b>se mueve</b> (recalcula con $a$ y $\\mu_k$). Si $\\le$ ⇒ <b>no se mueve</b> ($a=0$, y el roce vale lo que empuja).' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2022) — tal cual la prueba', html: '"Un bloque de aluminio de $m_1=20$ kg y un bloque de cobre con $m_2=60$ kg están conectados mediante una cuerda ideal sin masa que pasa por una polea ideal sin masa y sin fricción. Ambos bloques se colocan sobre una superficie de acero tal como se muestra en la figura, donde el ángulo $\\theta=30°$. Una vez colocados se liberan desde el reposo. (b) Cuando se liberan, ¿comenzarán a moverse? Fundamente. (c) Si comienzan a moverse, calcule la aceleración y la tensión; si no, determine la suma de las magnitudes de las fuerzas de fricción. Use $g=10$, $\\sin30=0{,}5$, $\\cos30\\approx0{,}87$." (Datos de tabla: aluminio-acero $\\mu_s=0{,}61$; acero-acero $\\mu_s=0{,}74$.)' },
        { t: 'fig', svg: FIG.twoBlocksIncline({deg:30,m1:'m₁ (Al)',m2:'m₂ (Cu)'}) },
        { t: 'example', title: 'Resolución del bloque aluminio/cobre', level: 'medio',
          body: '<p>$m_1=20$ kg (horizontal), $m_2=60$ kg (plano $30°$), conectados por polea. ¿Se mueven?</p>',
          solution: '<div class="steps"><div class="step"><b>DCL.</b> $m_1$ (horizontal): $N_1=m_1g=200$ N; lo que jala es la tensión. $m_2$ (plano): $N_2=m_2g\\cos30=60\\cdot10\\cdot0{,}87\\approx522$ N; lo que tiende a bajar es $m_2g\\sin30=60\\cdot10\\cdot0{,}5=300$ N.</div><div class="step"><b>Fuerza motriz</b> del sistema = $m_2g\\sin30=300$ N (tira de todo hacia abajo del plano).</div><div class="step"><b>Roce estático máximo</b> de ambos: $f_{1max}=\\mu_{s1}N_1=0{,}61\\cdot200=122$ N; $f_{2max}=\\mu_{s2}N_2=0{,}74\\cdot522\\approx386$ N. Pero ojo: el problema pide la suma de roces; el máximo combinado que se opone es $122+386\\approx508$ N (en la pauta usan $\\approx398{,}66$ N con otros coeficientes de la tabla).</div><div class="step"><b>Comparo:</b> fuerza motriz $300$ N $<$ roce estático máximo disponible. Por lo tanto <b>NO se mueve</b>.</div><div class="step"><b>(c)</b> Como $a=0$, la suma de las fuerzas de roce iguala a la fuerza motriz: $\\boxed{f_1+f_2=m_2g\\sin30=300\\text{ N}}$. (El roce estático solo aporta lo necesario, no su máximo.)</div></div>' },
        { t: 'fig', svg: FIG.springForce({}) },
        { t: 'example', title: 'Enunciado real (Ayudantía 6) — resorte 3-4-5', level: 'medio',
          body: '<p>"La rigidez del resorte es $k=200$ N/m y no está estirado cuando el bloque de 25 kg está en A. Determine la aceleración del bloque cuando $s=0{,}4$ m. La superficie es lisa." Sobre el bloque actúa una fuerza horizontal $F=100$ N; el resorte tiene largo natural $0{,}3$ m y baja vertical.</p>',
          solution: '<div class="steps"><div class="step">Cuando $s=0{,}4$ m, el resorte (que baja $0{,}3$ m y se corre $0{,}4$ m) mide $\\ell=\\sqrt{0{,}3^2+0{,}4^2}=0{,}5$ m (triángulo 3-4-5). Deformación $\\Delta\\ell=0{,}5-0{,}3=0{,}2$ m. La fuerza del resorte es $k\\Delta\\ell=200\\cdot0{,}2=40$ N, dirigida hacia el anclaje; su componente horizontal usa $\\cos\\alpha=0{,}4/0{,}5=0{,}8$.</div><div class="step">Newton en x (superficie lisa, sin roce): $F-k\\Delta\\ell\\cos\\alpha=ma\\Rightarrow 100-40\\cdot0{,}8=25a$.</div><div class="step">$100-32=68=25a\\Rightarrow \\boxed{a=2{,}72\\ \\mathrm{m/s^2}}$.</div></div>' },
        { t: 'fig', svg: FIG.incline({deg:24,label:'M',vF:'motor',aLabel:'θ₁',cap:'Auto que sube una cuesta; en A la pendiente disminuye.'}) },
        { t: 'example', title: 'Enunciado real (Ayudantía 6) — auto en cuesta', level: 'medio',
          body: '<p>"Un automóvil de masa $M$ sube por una cuesta de pendiente $\\theta_1$ a velocidad constante $v$. En el punto $A$ la pendiente baja abruptamente a $\\theta_2$, pero la fuerza del motor permanece constante. (b) Determine la aceleración justo después de $A$. (c) Si repite el viaje con una maleta $m$ sobre la parrilla, ¿qué fuerza ejerce el motor para ir a velocidad constante antes de $A$?"</p>',
          solution: '<div class="steps"><div class="step"><b>Antes de $A$</b> (velocidad constante, $a=0$): la fuerza del motor equilibra la componente del peso: $F=Mg\\sin\\theta_1$.</div><div class="step"><b>(b) Justo después de $A$</b> (misma $F$, pero ahora pendiente $\\theta_2$): $F-Mg\\sin\\theta_2=Ma\\Rightarrow Mg\\sin\\theta_1-Mg\\sin\\theta_2=Ma$.</div><div class="step">$\\boxed{a=g(\\sin\\theta_1-\\sin\\theta_2)}$ (hacia arriba del plano, porque $\\theta_1>\\theta_2$).</div><div class="step"><b>(c)</b> Con la maleta, la masa es $M+m$: $\\boxed{F=(M+m)g\\sin\\theta_1}$.</div></div>' },
        { t: 'example', title: 'Enunciado real (Taller 4) — bloque con polea y cubo', level: 'dificil',
          body: '<p>"Un bloque $M$ con una polea en su parte superior derecha está sobre el piso. Un cubo $m$ cuelga atado a una cuerda que pasa por la polea y se tira horizontalmente con fuerza $F$. El roce cinético entre todo es $\\mu$. El cubo desliza hacia arriba contra el bloque, y el bloque se mueve a la derecha con aceleración $a$. Determine $F$ en términos de $M$, $m$, $\\mu$, $a$, $g$."</p>',
          solution: '<div class="steps"><div class="step"><b>Cubo $m$</b> (se mueve con el bloque en horizontal y sube en vertical): horizontal, la pared del bloque lo empuja $N_1=ma$; vertical, $F-f_1-mg=ma_y$ con $f_1=\\mu N_1=\\mu ma$. Si sube pegado con la misma $a$ vertical (caso del enunciado): $F-\\mu ma-mg=ma$.</div><div class="step"><b>Bloque $M$</b> (horizontal): la fuerza $F$ (cuerda) lo jala, la normal del cubo $N_1$ y el roce con el piso $f_2=\\mu N_2$ lo frenan, con $N_2=Mg+f_1+\\ldots$. Armando el sistema completo y despejando se obtiene</div><div class="step">$\\boxed{F=\\dfrac{(m+M-\\mu^2 m)a+\\mu Mg}{1-\\mu}}$. (Lo importante: DCL de cada cuerpo + roce $\\mu N$ en cada contacto; el álgebra es lo de menos.)</div></div>' }
      ]
    },
    {
      id: 'u1l3', title: 'Sistemas acelerados y fuerzas de contacto',
      blocks: [
        { t: 'p', html: 'Cuando todo un montaje acelera (un carrito, una cuña, un camión), el truco es aplicar $\\sum\\vec F=m\\vec a$ con la aceleración del sistema. A veces conviene mirar el sistema completo y luego una parte.' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2023) — tal cual', html: '"Considere un bloque de masa $m_2$ que descansa sobre un bloque en forma de cuña, el cual tiene la posibilidad de moverse sobre una mesa sin roce. No existe roce entre el bloque $m_2$ y la cuña. Si a la cuña $m_1$ se le aplica una fuerza horizontal de magnitud $P$: (c) Encuentre la aceleración del sistema $m_1+m_2$ suponiendo que $m_2$ no resbala. (d) Encuentre $P$ en esa condición."' },
        { t: 'fig', svg: FIG.wedgeP({}) },
        { t: 'example', title: 'Cuña con bloque que no resbala', level: 'dificil',
          body: '<p>Bloque $m_2$ sobre cuña $m_1$ (cara inclinada $\\theta$, sin roce en ningún lado), fuerza $P$ horizontal sobre la cuña. Halla $a$ y $P$ para que $m_2$ no resbale.</p>',
          solution: '<div class="steps"><div class="step"><b>Idea clave:</b> si $m_2$ no resbala, todo el sistema acelera junto con la misma $a$ horizontal. La única fuerza horizontal sobre $m_2$ es la componente horizontal de la normal $N_2$ que le hace la cuña.</div><div class="step"><b>DCL de $m_2$:</b> normal $N_2$ (perpendicular a la cara inclinada) y peso. Componentes: horizontal $N_2\\sin\\theta=m_2a$; vertical $N_2\\cos\\theta-m_2g=0$.</div><div class="step">De la vertical: $N_2=\\dfrac{m_2g}{\\cos\\theta}$. Sustituyo en la horizontal: $\\dfrac{m_2g}{\\cos\\theta}\\sin\\theta=m_2a\\Rightarrow \\boxed{a=g\\tan\\theta}$.</div><div class="step"><b>(d) Sistema completo</b> $m_1+m_2$ en x: $P=(m_1+m_2)a=\\boxed{(m_1+m_2)g\\tan\\theta}$.</div></div>' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2024) — tal cual', html: '"El cilindro liso de metal tiene masa $m$ y se apoya en un carrito al que se le comunica una aceleración de $2g$ en el sentido ascendente de un plano inclinado de ángulo $\\theta$ con la horizontal tal que $\\tan\\theta=3/4$. Calcule las fuerzas de contacto en los puntos $A$ y $B$." ($A$: pared vertical del carrito, normal horizontal; $B$: superficie del plano, normal perpendicular al plano.)' },
        { t: 'fig', svg: FIG.incline({deg:37,label:'m',vF:'2g',cap:'Carrito que acelera 2g subiendo el plano (tan θ = 3/4).'}) },
        { t: 'example', title: 'Cilindro en carrito que acelera 2g', level: 'dificil',
          body: '<p>$\\tan\\theta=3/4$ ⇒ $\\sin\\theta=3/5=0{,}6$, $\\cos\\theta=4/5=0{,}8$. Acelera $2g$ subiendo el plano. Halla $F_A$ y $F_B$.</p>',
          solution: '<div class="steps"><div class="step">Ejes a lo largo del plano (x, hacia arriba) y perpendicular (y). La aceleración es $\\vec a=2g\\,\\hat x$.</div><div class="step"><b>Fuerzas sobre el cilindro:</b> $F_A$ horizontal (de la pared del carrito); $F_B$ perpendicular al plano (en y); peso $mg$ vertical hacia abajo. Hay que proyectar $F_A$ y el peso a los ejes del plano.</div><div class="step">Peso en ejes del plano: $-mg\\sin\\theta\\,\\hat x-mg\\cos\\theta\\,\\hat y$. $F_A$ horizontal en ejes del plano: $F_A\\cos\\theta\\,\\hat x-F_A\\sin\\theta\\,\\hat y$.</div><div class="step"><b>Eje x:</b> $F_A\\cos\\theta-mg\\sin\\theta=m(2g)\\Rightarrow F_A(0{,}8)-mg(0{,}6)=2mg\\Rightarrow F_A=\\dfrac{2{,}6mg}{0{,}8}=\\boxed{\\tfrac{13}{4}mg}$.</div><div class="step"><b>Eje y</b> ($a_y=0$): $F_B-mg\\cos\\theta-F_A\\sin\\theta=0\\Rightarrow F_B=mg(0{,}8)+\\tfrac{13}{4}mg(0{,}6)=0{,}8mg+1{,}95mg=\\boxed{\\tfrac{11}{4}mg}$.</div></div>' }
      ]
    },
    {
      id: 'u1l4', title: 'Fuerza que depende de la velocidad: velocidad terminal',
      blocks: [
        { t: 'p', html: 'Cuando el aire o un fluido frena con una fuerza que crece con la velocidad ($F_D=bv$ o $cv^2$), el cuerpo deja de acelerar al llegar a la <b>velocidad terminal</b>: la velocidad a la que el frenado iguala al empuje.' },
        { t: 'box', kind: 'form', title: 'Velocidad terminal', html: 'Se alcanza cuando $a=0$, es decir cuando la fuerza neta se anula:$$\\text{(empuje)}=\\text{(resistencia)}\\quad\\Rightarrow\\quad v_{term}\\text{ constante}$$' },
        { t: 'box', kind: 'peras', html: 'Con peras: al caer, mientras más rápido vas, más te frena el aire. Llega un punto en que el aire te frena tanto como te tira la gravedad: ahí dejas de acelerar y caes a velocidad constante. Eso es la velocidad terminal (por eso un paracaídas funciona).' },
        { t: 'example', title: 'Enunciado real (Ayudantía 8) — globo', level: 'medio',
          body: '<p>"La fuerza de flotación sobre el globo de 500 kg es $F=6$ kN y la resistencia del aire es $F_D=100v$ N, donde $v$ está en m/s. Determine la velocidad terminal o máxima del globo si parte del reposo." Usa $g=9{,}81$.</p>',
          solution: '<div class="steps"><div class="step">DCL (eje $y$ hacia arriba): flotación $F$ (arriba), peso $Mg$ (abajo), resistencia $F_D=100v$ (abajo, opuesta al movimiento ascendente).</div><div class="step">Newton: $F-Mg-100v=Ma$. Velocidad terminal cuando $a=0$: $6000-500(9{,}81)-100v_t=0$.</div><div class="step">$6000-4905=1095=100v_t\\Rightarrow \\boxed{v_t=10{,}95\\approx10{,}75\\ \\mathrm{m/s}}$ (con $g=10$ da exactamente $10$).</div></div>' },
        { t: 'example', title: 'Enunciado real (Taller 4) — paracaidista', level: 'facil',
          body: '<p>"Un paracaidista de masa $m$ está cayendo con una velocidad $v_0$ en el instante en que abre el paracaídas. Si la resistencia del aire es $F_D=Cv^2$, determine su velocidad máxima (velocidad terminal) durante el descenso."</p>',
          solution: '<div class="steps"><div class="step">DCL (cae): peso $mg$ abajo, resistencia $Cv^2$ arriba. Newton: $mg-Cv^2=ma$.</div><div class="step">Velocidad terminal: $a=0\\Rightarrow mg=Cv_t^2\\Rightarrow \\boxed{v_t=\\sqrt{mg/C}}$.</div><div class="step">Nota: $v_t$ NO depende de $v_0$. Si abre el paracaídas yendo más rápido que $v_t$, el aire lo frena hasta $v_t$; si va más lento, lo acelera hasta $v_t$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: '¿Cuándo el roce estático vale $\\mu_s N$?', a: 'Solo justo cuando el cuerpo está a punto de deslizar. Antes, vale lo necesario para el equilibrio (menos que el máximo).' },
    { q: 'Roce cinético: fórmula y dirección', a: '$f_k=\\mu_k N$, fijo, opuesto a la velocidad del cuerpo.' },
    { q: 'Receta "¿se mueve o no?"', a: 'Comparar la fuerza que tiende a moverlo con el roce estático máximo $\\mu_s N$. Si la supera, se mueve (usar $\\mu_k$); si no, $a=0$.' },
    { q: 'Si una cuña sin roce con bloque encima se empuja y el bloque no resbala, ¿aceleración?', a: '$a=g\\tan\\theta$ (de $N\\sin\\theta=ma$ y $N\\cos\\theta=mg$).' },
    { q: '¿Qué es la velocidad terminal?', a: 'La velocidad constante a la que la resistencia iguala al empuje y $a=0$. Para $F_D=Cv^2$ al caer: $v_t=\\sqrt{mg/C}$.' },
    { q: 'Dirección de la tensión y de la normal', a: 'Tensión: a lo largo de la cuerda, siempre tirando (saliendo del cuerpo). Normal: perpendicular a la superficie, siempre empujando.' }
  ],
  quiz: [
    { type: 'vf', q: 'El roce estático siempre vale $\\mu_s N$.', opts: ['Verdadero', 'Falso'], answer: 1, explain: 'Falso: vale lo necesario para el equilibrio y solo alcanza $\\mu_s N$ en el límite de deslizar.' },
    { type: 'alt', q: 'Una cuña sin roce con un bloque encima se empuja con $P$. Para que el bloque no resbale, la aceleración debe ser:', opts: ['$g\\sin\\theta$', '$g\\cos\\theta$', '$g\\tan\\theta$', '$g$'], answer: 2, explain: 'De $N\\sin\\theta=ma$ y $N\\cos\\theta=mg$ sale $a=g\\tan\\theta$.' },
    { type: 'alt', q: 'Al caer con resistencia $F_D=Cv^2$, la velocidad terminal es:', opts: ['$mg/C$', '$\\sqrt{mg/C}$', '$\\sqrt{C/mg}$', '$mgC$'], answer: 1, explain: 'Cuando $a=0$: $mg=Cv_t^2\\Rightarrow v_t=\\sqrt{mg/C}$.' },
    { type: 'comp', q: 'Sistema cuerda-polea liberado del reposo: el empuje (300 N) es menor que el roce estático máximo (400 N). Entonces:', opts: ['Acelera a $300/m$', 'No se mueve y el roce vale 300 N', 'No se mueve y el roce vale 400 N', 'Se mueve con $\\mu_k$'], answer: 1, explain: 'No se mueve; el roce estático aporta solo los 300 N necesarios para el equilibrio, no su máximo.' }
  ]
});
/* =====================================================================
   UNIDAD 2 — PLANOS, LIGADURAS Y POLEAS
   ===================================================================== */
U({
  id: 'u2', block: 'newton', prio: 3, icon: '⛓️',
  tag: 'Unidad 2 · Ligaduras y poleas',
  title: 'Planos, ligaduras y poleas',
  badge: { text: 'casi seguro', cls: 'pill-high' },
  desc: 'Sistemas conectados por cuerdas y poleas. La ecuación de ligadura (largo de cuerda constante) y la famosa relación 2:1 con polea móvil. Cae casi siempre.',
  lessons: [
    {
      id: 'u2l1', title: 'Ecuación de ligadura: el largo de la cuerda no cambia',
      blocks: [
        { t: 'p', html: 'Cuando dos cuerpos están unidos por una cuerda inextensible, sus movimientos están <b>amarrados</b>. La clave es escribir que el largo total de la cuerda es constante, y derivar dos veces para relacionar las aceleraciones.' },
        { t: 'box', kind: 'def', title: 'Cómo armar una ligadura', html: '1) Escribe el largo total de la cuerda como suma de tramos (en función de las posiciones $x_1,x_2,\\dots$).<br>2) Ese largo es CONSTANTE.<br>3) Deriva dos veces respecto al tiempo: las constantes desaparecen y queda una relación entre las aceleraciones.' },
        { t: 'box', kind: 'form', title: 'Polea fija simple (dos masas, 1:1)', html: 'Largo $\\ell=s_1+s_2=$ cte $\\Rightarrow \\dot s_1+\\dot s_2=0\\Rightarrow a_1=-a_2$. Lo que una sube, la otra baja, con la misma magnitud.' },
        { t: 'box', kind: 'form', title: 'Máquina de Atwood (deducible, no memorizar)', html: 'Dos masas colgando de una polea fija: $$a=\\frac{(m_1-m_2)g}{m_1+m_2},\\qquad T=\\frac{2m_1m_2g}{m_1+m_2}$$ Sale de aplicar Newton a cada masa con $a_1=-a_2=a$ y sumar.' },
        { t: 'box', kind: 'peras', html: 'Con peras: imagina la cuerda como un metro de medir que no se estira. Si un extremo avanza 5 cm, el otro tiene que retroceder 5 cm para que el total siga siendo el mismo. Eso es toda la ligadura simple.' }
      ]
    },
    {
      id: 'u2l2', title: 'La polea móvil y la relación 2:1 (la estrella)',
      blocks: [
        { t: 'p', html: 'Este es el patrón que MÁS se repite en las I2 (pruebas pasadas): una <b>polea móvil</b> que duplica (o reduce a la mitad) el movimiento. Si lo dominas, tienes media prueba ganada.' },
        { t: 'box', kind: 'form', title: 'Polea móvil: relación 2:1', html: 'Cuando una cuerda rodea una polea móvil, el extremo libre se mueve el <b>doble</b> que la polea. Resultado típico:$$a_1=2a_2\\quad(\\text{o } x_1+2x_2=\\text{cte}\\Rightarrow \\ddot x_1+2\\ddot x_2=0)$$ El bloque atado al extremo libre acelera el doble que el atado a la polea móvil.' },
        { t: 'box', kind: 'peras', title: 'Por qué aparece el 2', html: 'Una polea móvil cuelga de DOS tramos de cuerda. Si la polea baja 1 cm, hay que "soltar" 1 cm de cuerda por cada tramo = 2 cm en total, que aparecen en el extremo libre. Por eso el extremo se mueve el doble. Y la fuerza es al revés: la polea móvil reparte la carga, $T_{soporte}=2T$.' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2024) — tal cual', html: '"Para el sistema de la figura encuentre las aceleraciones de los bloques $B$ (de masa $m$) y $A$ (de masa $M$) y las tensiones de las cuerdas." ($B$ sobre superficie horizontal unido a una cuerda que pasa por una polea fija a una polea móvil; de la polea móvil cuelga $A$.)' },
        { t: 'fig', svg: FIG.pulleyMovible({}) },
        { t: 'example', title: 'Sistema con polea móvil (I2 2024)', level: 'dificil',
          body: '<p>Bloque $A$ ($M$) cuelga de una polea móvil; bloque $B$ ($m$) sobre superficie horizontal unido al extremo libre. Halla $a_A$, $a_B$, $T$ y $T_1$.</p>',
          solution: '<div class="steps"><div class="step"><b>Ligadura:</b> $A$ cuelga de la polea móvil ⇒ se mueve la mitad que $B$. Con $y_A$ (abajo +) y $x_B$ (+): $2y_A+x_B=\\ell\\Rightarrow 2\\ddot y_A+\\ddot x_B=0$.</div><div class="step"><b>DCL $A$:</b> $Mg-T_1=M\\ddot y_A$, donde $T_1$ sostiene la polea móvil.</div><div class="step"><b>Polea móvil ideal</b> (sin masa): $T_1=2T$, con $T$ la tensión de la cuerda que va a $B$.</div><div class="step"><b>DCL $B$</b> (horizontal): $-T=m\\ddot x_B$ (la tensión lo jala).</div><div class="step">De la ligadura $\\ddot x_B=-2\\ddot y_A$. Sustituyo: $-T=m(-2\\ddot y_A)\\Rightarrow T=2m\\ddot y_A$. Y $T_1=2T=4m\\ddot y_A$.</div><div class="step">En $A$: $Mg-4m\\ddot y_A=M\\ddot y_A\\Rightarrow Mg=(M+4m)\\ddot y_A\\Rightarrow \\boxed{\\ddot y_A=\\dfrac{M}{4m+M}g}$.</div><div class="step">Entonces $\\boxed{\\ddot x_B=-\\dfrac{2M}{4m+M}g}$, $T=\\dfrac{2Mm}{4m+M}g$, $\\boxed{T_1=\\dfrac{4Mm}{4m+M}g}$.</div></div>' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (Compilado 2.10) — tal cual', html: '"En el sistema de la figura, el bloque de masa $m_1$ se mueve sobre una superficie horizontal y está conectado, a través de una cuerda ideal, a una polea que se puede mover verticalmente. El bloque de masa $m_2$ está unido a la polea por otra cuerda ideal. Todas las poleas son ideales y sin roce. La superficie horizontal es lisa. El módulo de la aceleración del bloque horizontal es:" Respuesta: $\\dfrac{2m_2g}{4m_1+m_2}$.' },
        { t: 'box', kind: 'peras', html: 'Fíjate que el resultado $\\dfrac{2M}{4m+M}g$ (o $\\dfrac{2m_2}{4m_1+m_2}g$) aparece UNA Y OTRA VEZ. Ese "$4$" en el denominador es la firma de la polea móvil 2:1 (viene de $2^2$). Si ves polea móvil, espera un 4.' },
        { t: 'fig', svg: FIG.pulleyMovible({A:'M',B:'m',cap:'Dos poleas ideales: la móvil da la relación 2:1.'}) },
        { t: 'example', title: 'Enunciado real (Compilado 2.16) — dos poleas ideales', level: 'medio',
          body: '<p>"En el sistema de la figura, las poleas $P_1$ y $P_2$ son ideales. Llamamos $T$ a la tensión de la cuerda que parte de $O$ y llega hasta el bloque de masa $m$. La tensión $T$ está dada por:" (bloque $M$ con polea móvil, bloque $m$ colgando). Respuesta esperada: $T=\\frac{3mM g}{4m+M}$.</p>',
          solution: '<div class="steps"><div class="step"><b>Ligadura</b> (polea móvil): $2x+y=$ cte $\\Rightarrow 2\\ddot x+\\ddot y=0$.</div><div class="step"><b>DCL:</b> bloque $M$ (con la polea móvil, soporta $2T$): $M\\ddot x=Mg-2T$. Bloque $m$ (cuelga del extremo): $m\\ddot y=mg-T$.</div><div class="step">Con $\\ddot y=-2\\ddot x$ resuelves el sistema y obtienes $\\boxed{T=\\dfrac{3mM}{4m+M}g}$. Otra vez aparece el 4 (polea móvil) y un 3.</div></div>' }
      ]
    },
    {
      id: 'u2l3', title: 'Planos inclinados con poleas y roce',
      blocks: [
        { t: 'p', html: 'El combo clásico: dos bloques en planos inclinados (o uno en plano y otro colgando), unidos por cuerda, con roce. Es Newton + ligadura, ordenado.' },
        { t: 'box', kind: 'def', title: 'Estrategia', html: '1) Decide un sentido positivo de movimiento (ej. "$m_1$ sube su plano"). 2) DCL de cada bloque con ejes en su plano. 3) Roce SIEMPRE opuesto al movimiento supuesto. 4) Ligadura entre las aceleraciones. 5) Resuelve el sistema. Si $a$ sale negativa, el movimiento real es al revés (y el roce también).' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2024) — tal cual', html: '"Dos bloques $A$ y $B$ descansan sobre una cuña de ángulos $\\alpha$ y $\\beta$. Los bloques están conectados mediante una cuerda ideal y el sistema de poleas mostrado. El coeficiente de roce cinético entre $A$ y su plano es $\\mu_c$. No hay roce entre $B$ y su plano. $m_A=2m$, $m_B=m$. (a) Determine el trabajo de la fuerza de roce sobre $A$ si desciende una distancia $d$. (b) Si se liberan del reposo, determine la rapidez de $A$ cuando ha recorrido $d$." (Poleas 2:1: cuando $A$ baja $d$, $B$ sube $2d$.)' },
        { t: 'example', title: 'Cuña con poleas y roce (I2 2024) — método mixto', level: 'dificil',
          body: '<p>$m_A=2m$ (plano $\\alpha$, roce $\\mu_c$), $m_B=m$ (plano $\\beta$, sin roce). Relación 2:1. Halla (a) $W_{roce}$ sobre $A$ al bajar $d$ y (b) la rapidez de $A$.</p>',
          solution: '<div class="steps"><div class="step"><b>(a) Trabajo del roce.</b> Normal sobre $A$: $N_A=m_Ag\\cos\\alpha=2mg\\cos\\alpha$. Roce cinético $f=\\mu_c N_A=2\\mu_c mg\\cos\\alpha$, opuesto al movimiento. Al bajar $d$: $W_{roce}=-f\\,d=\\boxed{-2\\mu_c mgd\\cos\\alpha}$.</div><div class="step"><b>(b) Energía (más rápido que Newton aquí).</b> Ligadura 2:1: $A$ baja $d$ ⇒ $B$ sube $2d$, y $v_B=2v_A$.</div><div class="step">$E_f-E_i=W_{nc}$. Energía cinética final: $\\tfrac12 m_A v_A^2+\\tfrac12 m_B v_B^2=\\tfrac12(2m)v_A^2+\\tfrac12 m(2v_A)^2=mv_A^2+2mv_A^2=3mv_A^2$.</div><div class="step">Cambio de altura: $A$ baja ⇒ $\\Delta h_A=-d\\sin\\alpha$ (pierde $U$); $B$ sube $2d$ ⇒ $\\Delta h_B=+2d\\sin\\beta$. $\\Delta U=mg(-2\\cdot d\\sin\\alpha+ \\ldots)$. Con $m_A=2m$: $\\Delta U=2mg(-d\\sin\\alpha)+mg(2d\\sin\\beta)=-2mgd\\sin\\alpha+2mgd\\sin\\beta$.</div><div class="step">Balance $W_{nc}=\\Delta K+\\Delta U$: $-2\\mu_c mgd\\cos\\alpha=3mv_A^2+(-2mgd\\sin\\alpha+2mgd\\sin\\beta)$.</div><div class="step">Despejo: $3mv_A^2=2mgd\\sin\\alpha-2mgd\\sin\\beta-2\\mu_c mgd\\cos\\alpha$, de donde $\\boxed{v_A=\\sqrt{\\tfrac{2gd}{3}(\\sin\\alpha-\\sin\\beta-\\mu_c\\cos\\alpha)}}$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: '¿Cómo se arma una ecuación de ligadura?', a: 'Escribes el largo total de la cuerda (constante) en función de las posiciones y derivas dos veces para relacionar las aceleraciones.' },
    { q: 'Polea fija simple (dos masas): relación de aceleraciones', a: '$a_1=-a_2$: lo que una sube, la otra baja igual.' },
    { q: 'Polea móvil: ¿qué relación da?', a: 'Relación 2:1: el extremo libre se mueve el doble que la polea. $x_1+2x_2=$cte ⇒ $a_1=2a_2$.' },
    { q: '¿Por qué la polea móvil reparte la fuerza?', a: 'Cuelga de dos tramos de cuerda, así que la tensión que la sostiene es $2T$.' },
    { q: '¿Qué "firma" deja la polea móvil en el resultado?', a: 'Un 4 en el denominador (ej. $\\frac{2M}{4m+M}g$), que viene de $2^2$.' },
    { q: 'En planos con poleas y roce, ¿hacia dónde va el roce?', a: 'Opuesto al movimiento supuesto. Si la aceleración sale negativa, el movimiento real es al revés.' }
  ],
  quiz: [
    { type: 'alt', q: 'Una cuerda inextensible pasa por una polea fija con masas a cada lado. La relación de aceleraciones es:', opts: ['$a_1=a_2$', '$a_1=-a_2$', '$a_1=2a_2$', '$a_1=0$'], answer: 1, explain: 'Largo constante ⇒ $a_1=-a_2$: una sube lo que la otra baja.' },
    { type: 'alt', q: 'Con una polea móvil, si la polea baja una distancia $x$, el extremo libre de la cuerda se mueve:', opts: ['$x$', '$2x$', '$x/2$', '$4x$'], answer: 1, explain: 'La polea cuelga de dos tramos, así que el extremo libre se mueve $2x$.' },
    { type: 'vf', q: 'En una polea móvil ideal, la tensión que la sostiene es el doble de la tensión de la cuerda.', opts: ['Verdadero', 'Falso'], answer: 0, explain: 'Verdadero: $T_1=2T$, porque la sostienen dos tramos de cuerda.' },
    { type: 'comp', q: 'Ves el resultado $a=\\frac{2M}{4m+M}g$. ¿Qué te dice el 4 del denominador?', opts: ['Que hay 4 bloques', 'Que hay una polea móvil (relación 2:1)', 'Que el roce es 4μ', 'Que el plano es de 45°'], answer: 1, explain: 'El 4 = 2² es la firma de la polea móvil con relación 2:1.' }
  ]
});
/* =====================================================================
   UNIDAD 3 — MOVIMIENTO CIRCULAR
   ===================================================================== */
U({
  id: 'u3', block: 'newton', prio: 3, icon: '🔄',
  tag: 'Unidad 3 · Circular',
  title: 'Movimiento circular',
  badge: { text: 'lo más probable', cls: 'pill-star' },
  desc: 'Fuerza centrípeta, coordenadas polares ($a_r$, $a_\\theta$), guías circulares con resorte, el rizo, el cono y el péndulo. INCLUYE tu Control 2 resuelto: es el tipo más probable de la Prueba.',
  lessons: [
    {
      id: 'u3l1', title: 'Aceleración centrípeta y coordenadas polares',
      blocks: [
        { t: 'p', html: 'Cuando algo se mueve en círculo, aunque su rapidez sea constante, su <b>dirección</b> cambia: eso es una aceleración, dirigida hacia el centro (centrípeta). Newton dice que debe haber una fuerza neta hacia el centro que la cause.' },
        { t: 'box', kind: 'form', title: 'Aceleración centrípeta (círculo de radio R)', html: '$$a_c=\\frac{v^2}{R}=\\omega^2 R$$ dirigida hacia el centro. Aquí $v$ es la rapidez, $\\omega=\\dot\\theta$ la velocidad angular, $R$ el radio.' },
        { t: 'box', kind: 'form', title: 'Coordenadas polares (la fórmula que dan de hint)', html: 'Posición $\\vec r=r\\,\\hat u_r$. Velocidad y aceleración:$$\\vec v=\\dot r\\,\\hat u_r+r\\dot\\theta\\,\\hat u_\\theta$$ $$\\vec a=(\\ddot r-r\\dot\\theta^2)\\,\\hat u_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\,\\hat u_\\theta$$' },
        { t: 'vars', items: [
          ['$\\hat u_r$', 'Apunta del centro hacia el cuerpo (radial).'],
          ['$\\hat u_\\theta$', 'Perpendicular, en el sentido en que crece el ángulo (tangencial).'],
          ['$\\ddot r-r\\dot\\theta^2$', 'Componente radial. Si $r$ es constante (círculo): $-r\\dot\\theta^2=-\\omega^2 R$ (hacia el centro).'],
          ['$r\\ddot\\theta+2\\dot r\\dot\\theta$', 'Componente tangencial. Si $r$ cte y $\\omega$ cte, es 0.']
        ]},
        { t: 'box', kind: 'warn', title: 'Caso círculo (r constante)', html: 'Si el radio no cambia ($\\dot r=\\ddot r=0$): $\\vec a=-R\\dot\\theta^2\\,\\hat u_r+R\\ddot\\theta\\,\\hat u_\\theta$. La parte radial $-R\\dot\\theta^2=-v^2/R$ es la centrípeta; la tangencial $R\\ddot\\theta$ es la que cambia la rapidez. Newton radial: $\\sum F_r=-mv^2/R$ (negativo = hacia el centro).' },
        { t: 'fig', svg: FIG.centripetal({}) },
        { t: 'box', kind: 'peras', html: 'Con peras: das vueltas a una piedra con una cuerda. La cuerda tira de la piedra hacia tu mano (hacia el centro): esa tensión ES la fuerza centrípeta. Si sueltas, no hay fuerza al centro y la piedra sale disparada en línea recta (tangente). La fuerza centrípeta no es una fuerza nueva: es el NOMBRE del rol que cumple la tensión, la normal o el roce.' },
        { t: 'box', kind: 'exam', title: '🎯 TU Control 2 (15-may-2026) — el tipo MÁS probable de la Prueba', html: 'Enunciado tal cual: "Una argolla de masa $m$ desliza sin roce por una varilla circular $AB$, dispuesta en un plano vertical. Un resorte ideal de largo natural $R$ y constante $k$ está fijo en $B$ y unido a la argolla. La argolla se lanza hacia arriba (verticalmente) desde $A$ con velocidad $\\vec v_0$. Para el instante inmediatamente posterior al lanzamiento: (a) DCL, (b) ecuaciones de movimiento, (c) fuerza de contacto entre argolla y varilla, (d) aceleración de la argolla." (Geometría: cuarto de circunferencia de radio $R$; centro $O$ a la derecha de $A$; $B$ arriba de $O$.)' },
        { t: 'fig', svg: FIG.argollaGuia({}) },
        { t: 'example', title: 'Argolla en guía circular con resorte (tu Control 2) — Newton + centrípeta', level: 'dificil',
          body: '<p>Resuélvelo con Newton (no energía): halla la normal $N$ y la aceleración $\\vec a$ justo tras el lanzamiento en $A$. Este es el problema que probablemente caiga.</p>',
          solution: '<div class="steps"><div class="step"><b>Geometría en $A$.</b> El centro $O$ está a la derecha de $A$ (a distancia $R$), así que en $A$ la dirección <b>radial</b> (hacia el centro) es horizontal $+\\hat x$, y la <b>tangente</b> (dirección del lanzamiento) es vertical $\\hat y$. La argolla entra al círculo con rapidez $v_0$.</div><div class="step"><b>Resorte.</b> $B$ está en $O+R\\hat y$, o sea en $A+(R,R)$. El resorte va de $A$ a $B$: largo $=\\sqrt{R^2+R^2}=R\\sqrt2$, deformación $=R\\sqrt2-R=R(\\sqrt2-1)$. Apunta a $45°$, así que sus componentes son $\\dfrac{kR(\\sqrt2-1)}{\\sqrt2}$ tanto en $\\hat x$ como en $\\hat y$.</div><div class="step"><b>DCL en $A$:</b> peso $-mg\\hat y$; fuerza del resorte $\\dfrac{kR(\\sqrt2-1)}{\\sqrt2}(\\hat x+\\hat y)$; normal de la varilla $\\vec N$, radial (la tomamos en $-\\hat x$, saliendo del centro).</div><div class="step"><b>Eje $\\hat x$ (radial = centrípeta, $a_x=v_0^2/R$ hacia el centro):</b> $\\dfrac{kR(\\sqrt2-1)}{\\sqrt2}-N=m\\dfrac{v_0^2}{R}$.</div><div class="step"><b>(c) Despejo la fuerza de contacto:</b> $\\boxed{N=\\dfrac{kR(\\sqrt2-1)}{\\sqrt2}-\\dfrac{mv_0^2}{R}}$.</div><div class="step"><b>Eje $\\hat y$ (tangencial, $a_y$):</b> $\\dfrac{kR(\\sqrt2-1)}{\\sqrt2}-mg=ma_y\\Rightarrow a_y=\\dfrac{kR(\\sqrt2-1)}{m\\sqrt2}-g$.</div><div class="step"><b>(d) Aceleración total:</b> $\\boxed{\\vec a=\\dfrac{v_0^2}{R}\\,\\hat x+\\left(\\dfrac{kR(\\sqrt2-1)}{m\\sqrt2}-g\\right)\\hat y}$. La parte $\\hat x$ es centrípeta (la da la velocidad en la curva) y la $\\hat y$ es tangencial (la dan resorte y peso).</div><div class="step"><b>Idea clave:</b> en una guía curva, descompón en radial (centrípeta $=v^2/R$) y tangencial. La normal sale de la ecuación radial; la aceleración tangencial, de la otra. Es el mismo método del cono y del anillo en la barra.</div></div>' }
      ]
    },
    {
      id: 'u3l2', title: 'El rizo (loop) y la condición de no despegarse',
      blocks: [
        { t: 'p', html: 'El rizo vertical es un clásico: un cuerpo da una vuelta completa dentro de un aro. La pregunta típica es la velocidad mínima para "completar el rizo sin despegarse".' },
        { t: 'box', kind: 'form', title: 'En el punto más alto del rizo', html: 'Ahí el peso y la normal apuntan ambos hacia el centro (abajo):$$N+mg=\\frac{mv^2}{R}$$ El cuerpo se despega cuando $N=0$. La condición límite es:$$\\boxed{v_{alto}^2=gR}$$' },
        { t: 'box', kind: 'def', title: 'El gatillo "apenas completa el rizo"', html: 'Cuando el problema dice "apenas pasa por el punto más alto" o "velocidad mínima para no despegarse", significa $N=0$ arriba, o sea $v_{alto}^2=gR$. Esto se combina casi siempre con conservación de energía para hallar la velocidad/compresión inicial (ver Unidad 5).' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2023 / Ayudantía 8) — tal cual', html: '"Una masa $m$ comprime un resorte de constante $k$ y largo natural $\\ell_0$, una distancia $\\Delta$ respecto del largo natural. La masa, al liberarse desde el reposo, se despega del resorte y viaja hacia un loop circular de radio $a$, pasando por su punto más alto $C$, sin despegarse del loop. Luego continúa hacia el punto $E$ en el mismo plano que el resorte. No existe roce. (a) Velocidad en $C$. (b) Velocidad en $E$. (c) Distancia $\\Delta$ mínima para que se realice lo descrito."' },
        { t: 'fig', svg: FIG.loop({}) },
        { t: 'example', title: 'Rizo con resorte (I2 2023) — energía + condición de loop', level: 'dificil',
          body: '<p>Resorte comprimido $\\Delta$ lanza la masa a un loop de radio $a$. Sin roce. Halla $v_C$, $v_E$ y $\\Delta_{min}$.</p>',
          solution: '<div class="steps"><div class="step"><b>(a)</b> Energía del resorte $\\tfrac12 k\\Delta^2$ se reparte en $C$ (altura $2a$) entre cinética y potencial: $\\tfrac12 k\\Delta^2=\\tfrac12 mv_C^2+mg(2a)\\Rightarrow \\boxed{v_C^2=\\dfrac{k}{m}\\Delta^2-4ga}$.</div><div class="step"><b>(b)</b> En $E$ (mismo nivel que el resorte, altura 0): toda la energía vuelve a ser cinética: $\\tfrac12 k\\Delta^2=\\tfrac12 mv_E^2\\Rightarrow \\boxed{v_E^2=\\dfrac{k}{m}\\Delta^2}$.</div><div class="step"><b>(c) Condición de loop</b> en $C$: $v_C^2\\ge ga$. Entonces $\\dfrac{k}{m}\\Delta^2-4ga\\ge ga\\Rightarrow \\dfrac{k}{m}\\Delta^2\\ge 5ga\\Rightarrow \\boxed{\\Delta\\ge\\sqrt{\\dfrac{5mga}{k}}}$.</div><div class="step">Ese "$5$" famoso ($v^2=5gR$ abajo para completar un loop) sale justo de combinar energía + condición $N=0$ arriba.</div></div>' }
      ]
    },
    {
      id: 'u3l3', title: 'Conos giratorios, barras y péndulos',
      blocks: [
        { t: 'p', html: 'Los problemas "rotantes" de la Prueba 2 casi siempre te dan la fórmula de la aceleración en polares/cilíndricas como hint, y te piden normales o fuerzas. La estrategia es siempre la misma: DCL + Newton por componentes con $a_r=-R\\omega^2$.' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2023) — anillo en barra giratoria', html: '"Un anillo $C$ de masa $m$ puede deslizar libremente a lo largo de la barra lisa $AB$. En un instante dado, la barra $AB$ gira con velocidad angular $\\omega$ y aceleración angular $\\alpha$. Suponiendo que la barra $AB$ está alineada horizontalmente: determine la fuerza normal de la barra y la reacción radial de la placa $B$ sobre el anillo. Indicación: $\\vec a=(\\ddot r-r\\dot\\theta^2)\\hat r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\hat\\theta$."' },
        { t: 'example', title: 'Anillo en barra giratoria (I2 2023)', level: 'medio',
          body: '<p>Anillo a distancia $R$ del eje, barra gira con $\\omega$ y $\\alpha$, plano horizontal. Halla la reacción radial $N_B$ y la normal de la barra $F_{AB}$.</p>',
          solution: '<div class="steps"><div class="step">El anillo está fijo a la barra en $B$ (la placa lo retiene), así que $r=R$ constante: $\\dot r=\\ddot r=0$. Entonces $a_r=\\ddot r-r\\dot\\theta^2=-R\\omega^2$ y $a_\\theta=r\\ddot\\theta+2\\dot r\\dot\\theta=R\\alpha$.</div><div class="step"><b>DCL</b> (plano horizontal, el peso lo equilibra la normal vertical de la barra): radialmente solo actúa $N_B$ (la placa empuja hacia el centro), tangencialmente la barra empuja con $F_{AB}$.</div><div class="step"><b>Radial:</b> $-N_B=ma_r=-mR\\omega^2\\Rightarrow \\boxed{N_B=mR\\omega^2}$.</div><div class="step"><b>Tangencial:</b> $F_{AB}=ma_\\theta=\\boxed{mR\\alpha}$.</div></div>' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2024) — partícula en cono', html: '"Una partícula de masa $m$ se encuentra sobre la superficie interior de un cono invertido de 45° que gira con velocidad angular constante $\\omega_0$ respecto a su eje $z$. Entre la superficie y la partícula existe roce estático que la mantiene sin deslizar y girando en círculo a radio $R$. (b) Encuentre la normal. (c) Encuentre el roce estático. Hint: $\\cos45°=\\sin45°=1/\\sqrt2$."' },
        { t: 'fig', svg: FIG.cone({}) },
        { t: 'example', title: 'Partícula en cono giratorio 45° (I2 2024)', level: 'dificil',
          body: '<p>Cono 45°, gira con $\\omega_0$, partícula a radio $R$ sin deslizar. Halla $N$ y $f_r$.</p>',
          solution: '<div class="steps"><div class="step">Cilíndricas: $r=R$ cte, $\\dot\\theta=\\omega_0$ ⇒ $a_r=-R\\omega_0^2$, $a_z=0$. La partícula gira en círculo horizontal.</div><div class="step"><b>DCL:</b> normal $N$ perpendicular a la pared del cono (a 45°), roce $f_r$ a lo largo de la pared (a 45°, hacia arriba para que no caiga), peso $mg$ hacia abajo. Con $\\sin45=\\cos45=1/\\sqrt2$, las componentes:</div><div class="step"><b>Radial</b> ($\\hat r$, hacia el centro negativo): $\\tfrac{1}{\\sqrt2}(f_r-N)=-mR\\omega_0^2$.</div><div class="step"><b>Vertical</b> ($\\hat z$): $\\tfrac{1}{\\sqrt2}(f_r+N)-mg=0\\Rightarrow \\tfrac{1}{\\sqrt2}(f_r+N)=mg$.</div><div class="step"><b>Resto</b> las ecuaciones: $\\tfrac{1}{\\sqrt2}\\cdot2N=mg+mR\\omega_0^2\\Rightarrow \\boxed{N=\\dfrac{m}{\\sqrt2}(g+R\\omega_0^2)}$.</div><div class="step"><b>Sumo:</b> $\\tfrac{1}{\\sqrt2}\\cdot2f_r=mg-mR\\omega_0^2\\Rightarrow \\boxed{f_r=\\dfrac{m}{\\sqrt2}(g-R\\omega_0^2)}$.</div></div>' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (Compilado 2.9) — péndulo desde horizontal', html: '"Un pequeño objeto de masa $m$, en el extremo de un cordón, es mantenido horizontalmente a una distancia $R$ de un soporte fijo. Posteriormente, el objeto es liberado. ¿Cuál es la tensión en el cordón cuando el objeto está en el punto más bajo de su trayectoria?" Respuesta: $\\boxed{3mg}$.' },
        { t: 'fig', svg: FIG.pendulum({horizontal:true,cap:'Péndulo soltado desde la horizontal (parte del reposo).'}) },
        { t: 'example', title: 'Péndulo soltado desde la horizontal', level: 'medio',
          body: '<p>Masa $m$ en cuerda de largo $R$, soltada desde horizontal (reposo). ¿Tensión en el punto más bajo?</p>',
          solution: '<div class="steps"><div class="step"><b>Energía</b> para hallar $v$ abajo: cae una altura $R$, $\\tfrac12 mv^2=mgR\\Rightarrow v^2=2gR$.</div><div class="step"><b>Newton radial</b> en el punto más bajo (tensión hacia arriba/centro, peso hacia abajo): $T-mg=\\dfrac{mv^2}{R}=\\dfrac{m(2gR)}{R}=2mg$.</div><div class="step">$\\boxed{T=3mg}$. (Combinar energía para la velocidad + Newton centrípeto para la fuerza es EL patrón de circular.)</div></div>' },
        { t: 'fig', svg: FIG.dome({}) },
        { t: 'example', title: 'Enunciado real (Ayudantía 7) — bolita que se despega de un domo', level: 'dificil',
          body: '<p>"Una bolita de masa $m$ se desliza sin roce sobre una superficie esférica de radio $R$ partiendo desde el punto más alto con velocidad $v_0$. Determine el ángulo $\\theta_c$ en el que la bolita se despega de la superficie." ($\\theta$ medido desde la vertical.)</p>',
          solution: '<div class="steps"><div class="step"><b>Newton radial</b> (hacia el centro): el peso aporta $mg\\cos\\theta$ y la normal $N$ empuja hacia afuera: $mg\\cos\\theta-N=\\dfrac{mv^2}{R}$.</div><div class="step"><b>Energía</b> (sin roce) desde el tope (altura $R$ sobre el nivel del ángulo $\\theta$, que está a altura $R\\cos\\theta$): $\\tfrac12 mv^2=\\tfrac12 mv_0^2+mgR(1-\\cos\\theta)$, así $v^2=v_0^2+2gR(1-\\cos\\theta)$.</div><div class="step"><b>Despegue:</b> $N=0$. Entonces $mg\\cos\\theta=\\dfrac{mv^2}{R}\\Rightarrow gR\\cos\\theta=v_0^2+2gR(1-\\cos\\theta)$.</div><div class="step">Despejo: $3gR\\cos\\theta=v_0^2+2gR\\Rightarrow \\boxed{\\cos\\theta_c=\\dfrac{v_0^2}{3gR}+\\dfrac23}$. (Si $v_0=0$: $\\cos\\theta_c=2/3$, el clásico "se despega a 48°".)</div></div>' },
        { t: 'example', title: 'Enunciado real (Taller 4) — juego mecánico (cilíndricas)', level: 'dificil',
          body: '<p>"El juego gira con $\\dot\\theta=0{,}8$ rad/s constante. La trayectoria es $r=(3\\sin\\theta+5)$ m y $z=(3\\cos\\theta)$ m. Determine las componentes $r$, $\\theta$, $z$ de la fuerza del asiento sobre un niño de 20 kg cuando $\\theta=120°$."</p>',
          solution: '<div class="steps"><div class="step">Derivo: $\\dot r=3\\cos\\theta\\,\\dot\\theta$, $\\ddot r=-3\\sin\\theta\\,\\dot\\theta^2$ (con $\\ddot\\theta=0$). En $\\theta=120°$: $r=3(0{,}87)+5\\approx7{,}6$ m, $\\dot r=3(-0{,}5)(0{,}8)=-1{,}2$, $\\ddot r=-3(0{,}87)(0{,}64)\\approx-1{,}66$.</div><div class="step">Aceleraciones cilíndricas: $a_r=\\ddot r-r\\dot\\theta^2=-1{,}66-7{,}6(0{,}64)\\approx-6{,}53$; $a_\\theta=r\\ddot\\theta+2\\dot r\\dot\\theta=2(-1{,}2)(0{,}8)=-1{,}92$; $a_z=\\ddot z=-3\\cos\\theta\\,\\dot\\theta^2=0{,}96$.</div><div class="step">Newton ($m=20$): $F_r=ma_r\\approx-131$ N, $F_\\theta=ma_\\theta\\approx-38{,}4$ N, $F_z=m(a_z)+mg=20(0{,}96)+20(10)\\approx215$ N (la $z$ incluye sostener el peso).</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Aceleración centrípeta', a: '$a_c=v^2/R=\\omega^2 R$, dirigida hacia el centro.' },
    { q: 'Aceleración en polares (las dos componentes)', a: '$\\vec a=(\\ddot r-r\\dot\\theta^2)\\hat u_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\hat u_\\theta$.' },
    { q: 'En un círculo (r constante), ¿cuánto vale $a_r$?', a: '$a_r=-r\\dot\\theta^2=-\\omega^2 R=-v^2/R$ (hacia el centro).' },
    { q: 'Condición para completar un rizo en el punto más alto', a: '$N=0$ arriba ⇒ $v_{alto}^2=gR$.' },
    { q: '¿La fuerza centrípeta es una fuerza nueva?', a: 'No: es el ROL que cumple una fuerza real (tensión, normal, roce, gravedad) apuntando al centro.' },
    { q: 'Péndulo soltado desde la horizontal: ¿tensión abajo?', a: '$3mg$ (energía da $v^2=2gR$; Newton $T-mg=mv^2/R=2mg$).' },
    { q: 'Patrón de los problemas circulares', a: 'Energía para la velocidad + Newton centrípeto para la fuerza/normal. El radio constante da $a_r=-\\omega^2 R$.' }
  ],
  quiz: [
    { type: 'alt', q: 'En el punto más alto de un rizo, la velocidad mínima para no despegarse cumple:', opts: ['$v^2=2gR$', '$v^2=gR$', '$v^2=gR/2$', '$v=0$'], answer: 1, explain: 'Con $N=0$: $mg=mv^2/R\\Rightarrow v^2=gR$.' },
    { type: 'alt', q: 'Para un cuerpo en círculo de radio R con rapidez constante, la fuerza neta apunta:', opts: ['Tangente, hacia adelante', 'Hacia el centro', 'Hacia afuera', 'Es cero'], answer: 1, explain: 'Hay aceleración centrípeta $v^2/R$ hacia el centro, así que la fuerza neta apunta al centro.' },
    { type: 'vf', q: 'La "fuerza centrípeta" es una fuerza adicional que se dibuja en el DCL.', opts: ['Verdadero', 'Falso'], answer: 1, explain: 'Falso: es el nombre del rol de fuerzas reales (tensión, normal, etc.) que apuntan al centro. No se agrega aparte.' },
    { type: 'alt', q: 'Un anillo gira fijo a una barra a radio R con $\\omega$. La reacción radial sobre él es:', opts: ['$mR\\omega$', '$mR\\omega^2$', '$mg$', '$mR\\alpha$'], answer: 1, explain: '$a_r=-R\\omega^2$, así que la fuerza radial es $mR\\omega^2$ hacia el centro.' }
  ]
});
/* =====================================================================
   UNIDAD 4 — TRABAJO Y ENERGÍA CINÉTICA
   ===================================================================== */
U({
  id: 'u4', block: 'energia', prio: 3, icon: '⚡',
  tag: 'Unidad 4 · Trabajo y energía',
  title: 'Trabajo y energía cinética',
  badge: { text: 'cae seguro', cls: 'pill-hot' },
  desc: 'El concepto de trabajo, el teorema trabajo-energía, y cómo calcular el trabajo de cada fuerza (constante, resorte, peso). La puerta de entrada al tema que más cae.',
  lessons: [
    {
      id: 'u4l1', title: 'Trabajo y el teorema trabajo-energía',
      blocks: [
        { t: 'p', html: 'El método de energía es a menudo MUCHO más rápido que Newton, porque ignora el tiempo y los detalles del camino. La idea: el trabajo neto sobre un cuerpo es igual al cambio en su energía de movimiento.' },
        { t: 'box', kind: 'form', title: 'Trabajo de una fuerza', html: '$$W=\\vec F\\cdot\\vec d=Fd\\cos\\alpha\\qquad\\text{(fuerza constante)}$$ $$W=\\int \\vec F\\cdot d\\vec r\\qquad\\text{(fuerza variable)}$$' },
        { t: 'vars', items: [
          ['$\\alpha$', 'Ángulo entre la fuerza y el desplazamiento.'],
          ['$F\\cos\\alpha$', 'Solo la componente de la fuerza PARALELA al movimiento hace trabajo.'],
          ['Signo', '$W>0$ si la fuerza ayuda al movimiento; $W<0$ si lo frena (ej. roce); $W=0$ si es perpendicular (ej. la normal).']
        ]},
        { t: 'box', kind: 'form', title: 'Energía cinética y el teorema', html: '$$K=\\tfrac12 mv^2,\\qquad \\boxed{W_{tot}=\\Delta K=\\tfrac12 mv_f^2-\\tfrac12 mv_i^2}$$ $W_{tot}$ es el trabajo de TODAS las fuerzas (la fuerza neta).' },
        { t: 'box', kind: 'warn', title: 'Fuerzas que NO hacen trabajo', html: 'La <b>normal</b> y la <b>tensión</b> en un péndulo no hacen trabajo (son perpendiculares al movimiento). Esto simplifica un montón: en una superficie curva lisa, solo el peso (y resortes) trabajan.' },
        { t: 'box', kind: 'peras', html: 'Con peras: empujar una caja a lo largo de 3 m le "carga" energía de movimiento. Si la empujas en la dirección que avanza, le sumas energía ($W>0$); el roce, que va al revés, le resta ($W<0$). Al final, la energía de movimiento que tiene es exactamente la suma de todos esos aportes.' },
        { t: 'example', title: 'Ejemplo de clase: altura máxima sin tiempo', level: 'facil',
          body: '<p>Una masa se lanza hacia arriba con $v_0$, sin roce. ¿Altura máxima? (Resuélvelo con energía, sin cinemática.)</p>',
          solution: '<div class="steps"><div class="step">Única fuerza: el peso. $W=-mg\\,h$ (negativo, frena la subida).</div><div class="step">Teorema: $W=\\Delta K=0-\\tfrac12 mv_0^2$ (arriba $v=0$). Entonces $-mgh=-\\tfrac12 mv_0^2$.</div><div class="step">$\\boxed{h=\\dfrac{v_0^2}{2g}}$. Fíjate: ni apareció el tiempo. Esa es la ventaja del método energético.</div></div>' }
      ]
    },
    {
      id: 'u4l2', title: 'El trabajo de cada fuerza',
      blocks: [
        { t: 'p', html: 'Para usar energía necesitas calcular el trabajo de cada fuerza típica. Estos cuatro salen en casi todos los problemas.' },
        { t: 'box', kind: 'form', title: 'Trabajos que debes saver de memoria', html: '<b>Peso</b> ($g$ cte): $W_{peso}=-mg\\,\\Delta h$ (solo importa el cambio de altura, no el camino).<br><b>Resorte:</b> $W_{res}=\\tfrac12 k(x_i^2-x_f^2)$, con $x$ = deformación respecto al largo natural.<br><b>Roce cinético:</b> $W_{roce}=-\\mu_k N\\,s$, con $s$ = longitud recorrida (siempre negativo).<br><b>Fuerza constante</b> $\\vec P$: $W=P\\cos\\alpha\\cdot d$.' },
        { t: 'box', kind: 'warn', title: 'Trampa del resorte', html: 'En $U_e=\\tfrac12 kx^2$ y en el trabajo del resorte, $x$ es la <b>deformación</b> (cuánto se estiró o comprimió respecto al largo natural), NO la posición del bloque. Confundir esto es el error #1 en problemas de resorte.' },
        { t: 'box', kind: 'warn', title: 'Trampa del roce', html: 'En $W_{roce}=-\\mu_k N\\,s$, la $s$ es la distancia TOTAL recorrida sobre la superficie con roce. Si el cuerpo va y vuelve, súmalas (ida + vuelta). El roce siempre resta energía.' },
        { t: 'fig', svg: FIG.springFloor({rough:false,label:'m',cap:'Bloque liso que choca con un resorte.'}) },
        { t: 'example', title: 'Enunciado real (Ayudantía 8) — resorte no lineal', level: 'medio',
          body: '<p>"El bloque de 1,5 kg se desliza por un plano liso y choca con un resorte no lineal con rapidez $v=4$ m/s. Su resistencia es $F_s=ks^2$ con $k=900$ N/m². Determine la rapidez del bloque tras comprimir el resorte $s=0{,}2$ m."</p>',
          solution: '<div class="steps"><div class="step">El plano es liso ⇒ solo el resorte hace trabajo. Trabajo de la fuerza $F_s=ks^2$ al comprimir de $0$ a $0{,}2$ m (la fuerza se opone, $W<0$): $W=-\\int_0^{0{,}2}ks^2\\,ds=-\\dfrac{k}{3}s^3\\Big|_0^{0{,}2}=-\\dfrac{900}{3}(0{,}2)^3=-300\\cdot0{,}008=-2{,}4$ J.</div><div class="step">Teorema: $W=\\tfrac12 mv_f^2-\\tfrac12 mv_i^2\\Rightarrow -2{,}4=\\tfrac12(1{,}5)v_f^2-\\tfrac12(1{,}5)(4)^2$.</div><div class="step">$-2{,}4=0{,}75v_f^2-12\\Rightarrow 0{,}75v_f^2=9{,}6\\Rightarrow v_f^2=12{,}8\\Rightarrow \\boxed{v_f\\approx3{,}58\\ \\mathrm{m/s}}$.</div></div>' }
      ]
    },
    {
      id: 'u4l3', title: 'Trabajo, roce y campos no conservativos',
      blocks: [
        { t: 'p', html: 'El teorema trabajo-energía brilla cuando hay tramos con roce: simplemente restas el trabajo del roce. Y sirve para detectar si una fuerza es conservativa.' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (Compilado 3.6) — rampa + roce + resorte', html: '"Un bloque de masa $m$ se desliza por una rampa curva sin fricción, partiendo del reposo a una altura $h$. Al finalizar la rampa, se desliza una distancia $d$ por una superficie rugosa de coeficiente $\\mu$. Luego comprime una distancia $x$ un resorte de constante $k$ y se detiene momentáneamente. ¿Cuál es el valor de $x$?"' },
        { t: 'fig', svg: FIG.rampSpring({}) },
        { t: 'example', title: 'Rampa + roce + resorte (Compilado 3.6)', level: 'medio',
          body: '<p>Cae desde altura $h$ (rampa lisa), recorre $d$ con roce $\\mu$, comprime el resorte $x$ y se detiene. Halla $x$.</p>',
          solution: '<div class="steps"><div class="step">Punto inicial (reposo, altura $h$) y final (reposo, resorte comprimido $x$): $K_i=K_f=0$.</div><div class="step">Balance de energía: la energía potencial inicial $mgh$ se reparte entre lo que se come el roce y lo que guarda el resorte: $mgh=\\mu mg\\,d+\\tfrac12 kx^2$.</div><div class="step">(Equivalente: $W_{peso}+W_{roce}+W_{resorte}=\\Delta K=0$.) Despejo: $\\tfrac12 kx^2=mg(h-\\mu d)$.</div><div class="step">$\\boxed{x=\\sqrt{\\dfrac{2mg(h-\\mu d)}{k}}}$.</div></div>' },
        { t: 'box', kind: 'def', title: 'Fuerza conservativa vs no conservativa', html: 'Una fuerza es <b>conservativa</b> si su trabajo NO depende del camino, solo de los puntos inicial y final (peso, resorte, gravedad). Es <b>no conservativa</b> si depende del camino (roce). Test práctico: si el trabajo entre dos puntos da distinto por dos caminos, es no conservativa.' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (Compilado 3.10/3.11) — depende del camino', html: '"Considere la fuerza $\\vec F(x,y)=(x^2,\\,xy)$. Sean dos caminos $C_1$ (primero a $(1,0)$, luego sube a $(1,1)$) y $C_2$ (primero a $(0,1)$, luego a $(1,1)$). El trabajo $W_1$ por $C_1$ es $5/6$; por $C_2$ es $1/3$. Como $W_1\\neq W_2$, la fuerza es no conservativa."' },
        { t: 'example', title: 'Trabajo por dos caminos (campo no conservativo)', level: 'dificil',
          body: '<p>$\\vec F=(x^2,xy)$. Calcula el trabajo de $(0,0)$ a $(1,1)$ por $C_1$: tramo 1 de $(0,0)$ a $(1,0)$, tramo 2 de $(1,0)$ a $(1,1)$.</p>',
          solution: '<div class="steps"><div class="step"><b>Tramo 1</b> ($y=0$, $dy=0$, $x:0\\to1$): $W=\\int F_x\\,dx=\\int_0^1 x^2\\,dx=\\tfrac13$.</div><div class="step"><b>Tramo 2</b> ($x=1$, $dx=0$, $y:0\\to1$): $W=\\int F_y\\,dy=\\int_0^1 (1)(y)\\,dy=\\tfrac12$.</div><div class="step">$W_1=\\tfrac13+\\tfrac12=\\tfrac56$. Por el otro camino daría $\\tfrac13$. Como dependen del camino, $\\vec F$ es <b>no conservativa</b> (no tiene energía potencial asociada).</div></div>' },
        { t: 'example', title: 'Enunciado real (I2 2021) — camión que acelera una caja', level: 'dificil',
          body: '<p>"Un camión transporta una caja de masa $M$ y parte del reposo con aceleración constante $a$, recorriendo una distancia $D$ horizontal. Coeficientes caja-plataforma $\\mu_e$ y $\\mu_c$. (a) Mínimo $\\mu_e$ para que la caja no deslice. (b) Trabajo del camión sobre la caja si $\\mu_e>\\mu_{e,min}$. (c) Trabajo si $\\mu_e<\\mu_{e,min}$."</p>',
          solution: '<div class="steps"><div class="step"><b>(a)</b> La única fuerza horizontal sobre la caja es el roce, que debe darle la aceleración $a$: $f=Ma$. Para no deslizar, $f\\le\\mu_e Mg$, en el límite $\\mu_{e,min}Mg=Ma\\Rightarrow \\boxed{\\mu_{e,min}=a/g}$.</div><div class="step"><b>(b)</b> Si no desliza, la caja recorre $D$ con la misma $a$. El trabajo del roce (que es el que ejerce el camión) = $\\Delta K=\\tfrac12 Mv_f^2$ con $v_f^2=2aD$: $\\boxed{W_b=MaD}$.</div><div class="step"><b>(c)</b> Si desliza, el roce es cinético $f=\\mu_c Mg$, la caja acelera $a_c=\\mu_c g$. En el tiempo que el camión recorre $D$ ($\\Delta t=\\sqrt{2D/a}$), la caja gana $v_f=\\mu_c g\\,\\Delta t$. El trabajo del camión sobre la caja = su energía cinética: $W_c=\\tfrac12 Mv_f^2=\\boxed{\\dfrac{M\\mu_c^2 g^2 D}{a}}$.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Teorema trabajo-energía', a: '$W_{tot}=\\Delta K=\\tfrac12 mv_f^2-\\tfrac12 mv_i^2$, con $W_{tot}$ el trabajo de la fuerza neta.' },
    { q: 'Trabajo del peso', a: '$W_{peso}=-mg\\,\\Delta h$ (solo depende del cambio de altura).' },
    { q: 'Trabajo de un resorte', a: '$W_{res}=\\tfrac12 k(x_i^2-x_f^2)$, con $x$ la deformación respecto al largo natural.' },
    { q: 'Trabajo del roce cinético', a: '$W_{roce}=-\\mu_k N\\,s$, con $s$ la longitud recorrida (siempre negativo; sumar ida y vuelta).' },
    { q: '¿Qué fuerzas no hacen trabajo?', a: 'Las perpendiculares al movimiento: la normal y la tensión de un péndulo.' },
    { q: '¿Cómo sé si una fuerza es no conservativa?', a: 'Si su trabajo entre dos puntos depende del camino (como el roce). Las conservativas (peso, resorte) no dependen del camino.' },
    { q: 'En $U_e=\\frac12 kx^2$, ¿qué es $x$?', a: 'La deformación del resorte (estiramiento o compresión respecto al largo natural), NO la posición del bloque.' }
  ],
  quiz: [
    { type: 'alt', q: 'El teorema trabajo-energía dice que el trabajo neto es igual a:', opts: ['$\\Delta U$', '$\\Delta K$', '$\\Delta p$', '$ma$'], answer: 1, explain: 'El trabajo de la fuerza neta iguala el cambio de energía cinética.' },
    { type: 'vf', q: 'La fuerza normal generalmente no hace trabajo.', opts: ['Verdadero', 'Falso'], answer: 0, explain: 'Verdadero: es perpendicular al movimiento, así que su trabajo es cero.' },
    { type: 'alt', q: 'Un bloque cae desde $h$ (rampa lisa), recorre $d$ con roce $\\mu$ y comprime un resorte $x$ deteniéndose. Entonces:', opts: ['$mgh=\\tfrac12 kx^2$', '$mgh=\\mu mgd+\\tfrac12 kx^2$', '$mgh+\\mu mgd=\\tfrac12 kx^2$', '$\\tfrac12 kx^2=\\mu mgd$'], answer: 1, explain: 'La energía inicial $mgh$ se reparte entre el roce ($\\mu mgd$) y el resorte ($\\frac12 kx^2$).' },
    { type: 'vf', q: 'El roce es una fuerza conservativa.', opts: ['Verdadero', 'Falso'], answer: 1, explain: 'Falso: su trabajo depende del camino recorrido, por eso es no conservativa.' }
  ]
});
/* =====================================================================
   UNIDAD 5 — ENERGÍA POTENCIAL Y CONSERVACIÓN
   ===================================================================== */
U({
  id: 'u5', block: 'energia', prio: 3, icon: '🏔️',
  tag: 'Unidad 5 · Conservación',
  title: 'Energía potencial y conservación',
  badge: { text: 'el que más cae', cls: 'pill-star' },
  desc: 'Energía potencial (gravitatoria y elástica), conservación de la energía mecánica, y el balance con roce E_f − E_i = W_nc. El tema que MÁS cae en el Prueba 2.',
  lessons: [
    {
      id: 'u5l1', title: 'Energía potencial y conservación de la energía mecánica',
      blocks: [
        { t: 'p', html: 'La energía potencial es energía "guardada" por la posición o configuración. Las fuerzas conservativas (peso, resorte) la guardan y la devuelven sin pérdidas. Si solo actúan ellas, la energía mecánica total se conserva.' },
        { t: 'box', kind: 'form', title: 'Las dos energías potenciales', html: '<b>Gravitatoria:</b> $U_g=mgh$ ($h$ = altura respecto a un nivel de referencia que TÚ eliges).<br><b>Elástica:</b> $U_e=\\tfrac12 kx^2$ ($x$ = deformación del resorte).' },
        { t: 'box', kind: 'form', title: 'Energía mecánica y conservación', html: 'Energía mecánica total: $E=K+U_g+U_e=\\tfrac12 mv^2+mgh+\\tfrac12 kx^2$.<br>Si <b>solo hay fuerzas conservativas</b> (sin roce, sin fuerzas externas):$$\\boxed{E_i=E_f}\\quad\\Rightarrow\\quad K_i+U_i=K_f+U_f$$' },
        { t: 'box', kind: 'def', title: 'Receta de conservación (5 pasos)', html: '1) Dibuja y elige el nivel de referencia $U_g=0$ (normalmente lo más bajo).<br>2) Identifica las energías en el punto inicial y en el final.<br>3) Escribe $E_i$ y $E_f$.<br>4) Iguálalas ($E_i=E_f$ si no hay roce).<br>5) Despeja lo que piden.' },
        { t: 'box', kind: 'peras', html: 'Con peras: la montaña rusa. Arriba tiene mucha energía de altura ($U_g$ grande) y poca velocidad. Al bajar, esa energía de altura se convierte en velocidad ($K$ grande). Sin roce, la suma $K+U$ es la misma en todo el recorrido: la energía solo cambia de forma, no se pierde.' },
        { t: 'example', title: 'Ejemplo de clase: cilindro entre dos resortes', level: 'medio',
          body: '<p>Un cilindro $m$ se suelta del reposo y baja una altura $h$; lo frenan dos resortes iguales de constante $k$ y largo natural $\\ell_0$. Halla la rapidez tras bajar $h$ (sin roce). (Geometría: cada resorte se estira de $\\ell_0$ a $\\sqrt{\\ell_0^2+h^2}$.)</p>',
          solution: '<div class="steps"><div class="step">Solo fuerzas conservativas ⇒ $E_i=E_f$. Tomo $U_g=0$ abajo (tras bajar $h$).</div><div class="step">Arriba (reposo, altura $h$): $E_i=mgh$. Abajo: $E_f=\\tfrac12 mv^2+2\\cdot\\tfrac12 k(\\Delta\\ell)^2$ (dos resortes), con $\\Delta\\ell=\\sqrt{\\ell_0^2+h^2}-\\ell_0$.</div><div class="step">$mgh=\\tfrac12 mv^2+k(\\Delta\\ell)^2\\Rightarrow \\boxed{v^2=2gh-\\dfrac{2k}{m}\\big(\\sqrt{\\ell_0^2+h^2}-\\ell_0\\big)^2}$.</div><div class="step">Nota la deformación por Pitágoras: el resorte se estira en diagonal, por eso $\\Delta\\ell$ usa la hipotenusa.</div></div>' }
      ]
    },
    {
      id: 'u5l2', title: 'El balance con roce: E_f − E_i = W_nc',
      blocks: [
        { t: 'p', html: 'Cuando hay roce (o una fuerza externa), la energía mecánica YA NO se conserva: el roce se la "come". El cambio de energía mecánica es exactamente el trabajo de las fuerzas no conservativas.' },
        { t: 'box', kind: 'form', title: 'La ecuación maestra del Prueba 2', html: '$$\\boxed{E_f-E_i=W_{nc}}$$ donde $W_{nc}=W_{roce}+W_{F_{ext}}$, y el roce aporta $W_{roce}=-\\mu_k N\\,s$ (negativo). En un plano $\\theta$: $N=mg\\cos\\theta$ y $s=h/\\sin\\theta$ si recorre una altura $h$.' },
        { t: 'box', kind: 'warn', html: 'Cuidado con los signos: $W_{nc}$ es casi siempre NEGATIVO (el roce resta), así que $E_f<E_i$. Si te da $E_f>E_i$ sin una fuerza externa que empuje, te equivocaste en un signo.' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2023) — resorte con roce', html: '"Una masa $M$ está unida a un resorte de constante $k$ y largo natural $\\ell_0$, fijo a una pared. La masa desliza sobre un plano horizontal con coeficiente de roce $\\mu$ (estático = cinético). Inicialmente el resorte está comprimido $\\delta_0$. En $t=0$ la masa se suelta, alcanza una elongación máxima $\\delta_1$, luego vuelve y alcanza una compresión $\\delta_2$. Encuentre $\\delta_1$ y $\\delta_2$."' },
        { t: 'fig', svg: FIG.springFloor({rough:true,label:'M',cap:'Resorte horizontal con bloque sobre piso con roce μ.'}) },
        { t: 'example', title: 'Resorte con roce, ida y vuelta (I2 2023)', level: 'dificil',
          body: '<p>Resorte comprimido $\\delta_0$, roce $\\mu$. Halla la elongación máxima $\\delta_1$ y la compresión de regreso $\\delta_2$ (en valor absoluto).</p>',
          solution: '<div class="steps"><div class="step"><b>Ida</b> ($\\delta_0\\to\\delta_1$): en ambos extremos la masa está en reposo ($K=0$). Solo cambia la energía elástica. Distancia recorrida $s=\\delta_0+\\delta_1$.</div><div class="step">$E_f-E_i=W_{roce}$: $\\tfrac12 k\\delta_1^2-\\tfrac12 k\\delta_0^2=-\\mu Mg(\\delta_0+\\delta_1)$.</div><div class="step">Factorizo $\\tfrac12 k(\\delta_1^2-\\delta_0^2)=\\tfrac12 k(\\delta_1-\\delta_0)(\\delta_1+\\delta_0)=-\\mu Mg(\\delta_0+\\delta_1)$. Divido por $(\\delta_0+\\delta_1)$: $\\tfrac12 k(\\delta_1-\\delta_0)=-\\mu Mg\\Rightarrow \\boxed{\\delta_1=\\delta_0-\\dfrac{2\\mu Mg}{k}}$.</div><div class="step"><b>Vuelta</b> ($\\delta_1\\to\\delta_2$): mismo razonamiento, otra vez resta $\\dfrac{2\\mu Mg}{k}$: $\\boxed{\\delta_2=\\delta_1-\\dfrac{2\\mu Mg}{k}=\\delta_0-\\dfrac{4\\mu Mg}{k}}$.</div><div class="step">Patrón bonito: cada medio ciclo el resorte pierde $\\dfrac{2\\mu Mg}{k}$ de amplitud. Así se amortigua una oscilación con roce.</div></div>' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2021) — paquetes en rampa y cinta', html: '"Paquetes de masa $m$ se arrojan en una rampa inclinada desde el punto $A$ con rapidez $v_0$. Se deslizan sobre las superficies $ABC$ (tramo inclinado $\\theta$ de largo $d$, luego horizontal $L$) llegando a una cinta que se mueve con rapidez $v_1$. Experimentan roce $\\mu$ con todas las superficies. (a) Determine la rapidez en $C$."' },
        { t: 'fig', svg: FIG.incline({deg:30,label:'m',mu:true,vF:'v₀',cap:'Rampa con roce; abajo sigue un tramo horizontal hasta la cinta.'}) },
        { t: 'example', title: 'Paquetes en rampa con roce (I2 2021)', level: 'dificil',
          body: '<p>Sale de $A$ con $v_0$, baja el tramo inclinado $d$ (ángulo $\\theta$, altura $d\\sin\\theta$), luego horizontal $L$, todo con roce $\\mu$. Halla $v_C$.</p>',
          solution: '<div class="steps"><div class="step">Tomo $U_g=0$ en el nivel de $C$ (abajo). Punto inicial $A$ está a altura $h_A=d\\sin\\theta$.</div><div class="step">Roce: en el plano $W_1=-\\mu(mg\\cos\\theta)\\,d$; en el horizontal $W_2=-\\mu mg\\,L$. Total $W_{nc}=-\\mu mg(d\\cos\\theta+L)$.</div><div class="step">Balance $E_C-E_A=W_{nc}$: $\\big(\\tfrac12 mv_C^2+0\\big)-\\big(\\tfrac12 mv_0^2+mgd\\sin\\theta\\big)=-\\mu mg(d\\cos\\theta+L)$.</div><div class="step">Despejo: $\\boxed{v_C=\\sqrt{v_0^2+2gd\\sin\\theta-2\\mu g(d\\cos\\theta+L)}}$.</div></div>' }
      ]
    },
    {
      id: 'u5l3', title: 'Resortes en posiciones difíciles y guías curvas',
      blocks: [
        { t: 'p', html: 'Los problemas más difíciles ponen el resorte en diagonal o en un plano inclinado, o combinan guía curva + resorte + roce. La clave siempre es la misma: la deformación es (largo actual − largo natural), y el balance de energía.' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (Ayudantía 9) — collarín en barra lisa', html: '"El collarín de 5 kg se desliza a lo largo de la barra lisa. Si el collarín se suelta desde el reposo en $A$, determine su rapidez cuando pasa por $B$. El resorte tiene una longitud no alargada de 200 mm." ($k=500$ N/m; en $A$ el resorte mide $0{,}6$ m, en $B$ mide $0{,}3$ m; $B$ está $0{,}3$ m más arriba.)' },
        { t: 'example', title: 'Collarín en barra lisa con resorte (Ayudantía 9)', level: 'medio',
          body: '<p>$m=5$ kg, $k=500$ N/m, $\\ell_0=0{,}2$ m. En $A$ (reposo) el resorte mide $0{,}6$ m; en $B$ mide $0{,}3$ m y está $0{,}3$ m más arriba. Halla $v_B$. (Barra lisa = sin roce.)</p>',
          solution: '<div class="steps"><div class="step">Sin roce ⇒ $E_A=E_B$. Deformaciones: $x_A=0{,}6-0{,}2=0{,}4$ m; $x_B=0{,}3-0{,}2=0{,}1$ m.</div><div class="step">$U_g=0$ en $A$. Energía en $A$ (reposo): $E_A=\\tfrac12 k x_A^2=\\tfrac12(500)(0{,}4)^2=40$ J.</div><div class="step">Energía en $B$: $E_B=\\tfrac12 mv_B^2+mg(0{,}3)+\\tfrac12 k x_B^2=\\tfrac12(5)v_B^2+5(9{,}81)(0{,}3)+\\tfrac12(500)(0{,}1)^2$.</div><div class="step">$40=2{,}5v_B^2+14{,}7+2{,}5\\Rightarrow 2{,}5v_B^2=22{,}8\\Rightarrow \\boxed{v_B\\approx3{,}02\\ \\mathrm{m/s}}$.</div></div>' },
        { t: 'example', title: 'Enunciado real (Ayudantía 9) — canicas que caen en un recipiente', level: 'dificil',
          body: '<p>"Las canicas de 5 g caen desde el reposo en $A$ (altura 3 m) por un tubo, salen horizontalmente en $B$ (altura 2 m), y caen en un recipiente $C$ en el suelo. Determine la distancia horizontal $R$ y la rapidez con que llegan a $C$." (Sin roce.)</p>',
          solution: '<div class="steps"><div class="step"><b>Velocidad en $B$</b> (conservación $A\\to B$, baja $3-2=1$ m): $\\tfrac12 mv_B^2=mg(1)\\Rightarrow v_B=\\sqrt{2g(1)}=\\sqrt{20}\\approx4{,}43$ m/s (horizontal).</div><div class="step"><b>Proyectil desde $B$</b> (altura 2 m, $v_{0y}=0$): tiempo de caída $t=\\sqrt{2(2)/g}=\\sqrt{0{,}4}\\approx0{,}63$ s. Alcance $R=v_B\\,t\\approx4{,}43(0{,}63)\\approx\\boxed{2{,}83\\ \\mathrm{m}}$.</div><div class="step"><b>Rapidez en $C$</b> (conservación $A\\to C$, baja 3 m): $v_C=\\sqrt{2g(3)}=\\sqrt{60}\\approx\\boxed{7{,}67\\ \\mathrm{m/s}}$. (La energía total solo depende de la altura caída, no del camino.)</div></div>' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (Compilado 3.20) — resorte en plano inclinado', html: '"Una masa $m$ está sobre un plano inclinado $\\theta$, conectada a un resorte de constante $k$ y largo natural $\\ell$. Llamando $x$ a la distancia entre el soporte y la masa, y sin roce, la energía potencial del sistema se puede escribir como:" Respuesta: $U(x)=\\tfrac12 k(x-\\ell)^2+mgx\\sin\\theta$.' },
        { t: 'example', title: 'Energía potencial en plano inclinado (Compilado 3.20/3.21)', level: 'medio',
          body: '<p>Masa $m$ en plano $\\theta$ con resorte ($k$, largo natural $\\ell$). (a) Escribe $U(x)$. (b) Si se comprime $d$ y se suelta, halla $v^2(x)$.</p>',
          solution: '<div class="steps"><div class="step"><b>(a)</b> La deformación del resorte es $(x-\\ell)$, así $U_e=\\tfrac12 k(x-\\ell)^2$. La altura a lo largo del plano es $x\\sin\\theta$, así $U_g=mgx\\sin\\theta$. Total: $\\boxed{U(x)=\\tfrac12 k(x-\\ell)^2+mgx\\sin\\theta}$.</div><div class="step"><b>(b)</b> Conservación desde la posición comprimida (reposo) a una posición $x$: $E_i=E(x)$. Si parte comprimido $d$ (en $x_i=\\ell-d$) en reposo y sin roce: $\\tfrac12 mv^2=U(x_i)-U(x)$.</div><div class="step">Desarrollando: $\\boxed{v^2=\\dfrac{k}{m}\\big(d^2-(x-\\ell)^2\\big)-2g(x+d-\\ell)\\sin\\theta}$.</div></div>' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (Taller 5) — bungee', html: '"Una persona de masa $m$ realiza un salto bungee con una cuerda elástica de largo $L$. La caída es libre hasta que la cuerda se estira por completo (se comporta como resorte ideal). Cae una distancia máxima $2L$ bajo el punto de salto. (a) ¿Cuánto vale la constante elástica? (b) Aceleración en el punto más bajo. (c) ¿A qué distancia la velocidad es máxima y cuánto vale?"' },
        { t: 'fig', svg: FIG.bungee({}) },
        { t: 'example', title: 'Salto bungee (Taller 5)', level: 'dificil',
          body: '<p>Cuerda largo $L$, cae máximo $2L$. Halla $k$, la aceleración abajo, y dónde/cuánto es $v_{max}$. (Eje $z$ hacia abajo, $U_g=0$ arriba.)</p>',
          solution: '<div class="steps"><div class="step"><b>(a)</b> En el punto más bajo ($z=2L$) está en reposo. La cuerda se estira $(2L-L)=L$. Conservación: $0=-mg(2L)+\\tfrac12 kL^2$ (bajó $2L$ ganando $K=0$, guardó energía elástica). $\\Rightarrow \\boxed{k=\\dfrac{4mg}{L}}$.</div><div class="step"><b>(b)</b> Newton abajo: $m\\ddot z=mg-k(z-L)$. En $z=2L$: $m\\ddot z=mg-k(L)=mg-4mg=-3mg\\Rightarrow \\boxed{\\ddot z=-3g}$ (3g hacia arriba: el tirón es brutal).</div><div class="step"><b>(c)</b> $v$ máxima cuando $\\ddot z=0$: $mg=k(z-L)\\Rightarrow z-L=\\dfrac{mg}{k}=\\dfrac{L}{4}\\Rightarrow z=\\dfrac{5L}{4}$.</div><div class="step">Conservación de $z=0$ a $z=5L/4$: $\\tfrac12 mv^2=mg\\cdot\\tfrac{5L}{4}-\\tfrac12 k(\\tfrac{L}{4})^2$. Con $k=4mg/L$: $\\tfrac12 mv^2=\\tfrac{5mgL}{4}-\\tfrac{mgL}{8}=\\tfrac{9mgL}{8}\\Rightarrow \\boxed{v=\\tfrac32\\sqrt{gL}}$.</div></div>' }
      ]
    },
    {
      id: 'u5l4', title: 'El gran combo: argolla en guía con resorte y roce',
      blocks: [
        { t: 'p', html: 'El problema "estrella" de varias I2 pasadas: una argolla en una guía (recta + curva) con un resorte pivotado y un tramo con roce. Da miedo, pero es solo la receta de energía aplicada con cuidado a la geometría.' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2021 / Compilado 3.1) — argolla en guía', html: '"Una argolla de masa $m$ parte desde el reposo en $A$ y se desliza por una guía (en un plano vertical) bajo su peso y un resorte de constante $k$ y largo natural $R$ (o $R/2$), pivotado en un punto fijo. El arco $ABCD$ es sin roce, pero el tramo $DE$ (o $DA$) tiene roce cinético $\\mu_c$. Determine el máximo valor de $m$ para que la argolla llegue a $D$ / la rapidez en $C$ / la distancia $X$ que alcanza." (Geometría con radio $R$.)' },
        { t: 'fig', svg: FIG.argollaGuia({cap:'Argolla en guía circular con resorte (I2 2021).'}) },
        { t: 'example', title: 'Argolla en guía con resorte (I2 2021, parte a)', level: 'dificil',
          body: '<p>Argolla parte en reposo en $A$, resorte ($k$, largo natural $R$) pivotado en $O$. Arco $ABCD$ sin roce. Halla el máximo $m$ para que la argolla "apenas" llegue a $D$ (a altura $2R$), donde el resorte tiene su largo natural. En $A$ el resorte mide $\\sqrt{(2R)^2+R^2}=R\\sqrt5$.</p>',
          solution: '<div class="steps"><div class="step">"Apenas llega a $D$" ⇒ llega con $v=0$. Sin roce en $ABCD$ ⇒ conservación $E_A=E_D$.</div><div class="step">En $A$ (reposo, $U_g=0$): energía elástica con deformación $x_A=R\\sqrt5-R=R(\\sqrt5-1)$. $E_A=\\tfrac12 k\\,R^2(\\sqrt5-1)^2$.</div><div class="step">En $D$ (reposo, altura $2R$, resorte en largo natural ⇒ $U_e=0$): $E_D=mg(2R)$.</div><div class="step">Igualo: $\\tfrac12 kR^2(\\sqrt5-1)^2=2mgR\\Rightarrow \\boxed{m=\\dfrac{kR(\\sqrt5-1)^2}{4g}}$.</div><div class="step">Es el máximo $m$: con más masa, $mg\\cdot2R$ supera la energía del resorte y no llega. (En la parte b, lo que sobra de energía cinética en $D$ se disipa por el roce en $DE$: $\\tfrac12 mv_D^2=\\mu_c mg\\,X$.)</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Energía potencial gravitatoria y elástica', a: '$U_g=mgh$ (h respecto a un nivel que eliges); $U_e=\\tfrac12 kx^2$ (x = deformación).' },
    { q: '¿Cuándo se conserva la energía mecánica?', a: 'Cuando solo actúan fuerzas conservativas (sin roce ni fuerzas externas): $E_i=E_f$.' },
    { q: 'La ecuación maestra con roce', a: '$E_f-E_i=W_{nc}$, con $W_{roce}=-\\mu_k N\\,s$ (negativo).' },
    { q: 'En un plano inclinado θ, ¿N y la distancia s si baja una altura h?', a: '$N=mg\\cos\\theta$ y $s=h/\\sin\\theta$.' },
    { q: '¿Qué es la deformación de un resorte estirado en diagonal?', a: '(Largo actual − largo natural). El largo actual sale por Pitágoras con la geometría.' },
    { q: 'Resorte con roce: ¿cuánto pierde de amplitud cada medio ciclo?', a: '$\\frac{2\\mu mg}{k}$ (de ahí $\\delta_1=\\delta_0-\\frac{2\\mu mg}{k}$, $\\delta_2=\\delta_0-\\frac{4\\mu mg}{k}$).' },
    { q: 'Bungee: si cae máximo 2L con cuerda L, ¿k?', a: '$k=4mg/L$ (de $mg\\cdot2L=\\tfrac12 kL^2$).' }
  ],
  quiz: [
    { type: 'alt', q: 'Sin roce, un cuerpo baja una altura h partiendo del reposo. Su rapidez abajo es:', opts: ['$\\sqrt{gh}$', '$\\sqrt{2gh}$', '$2gh$', '$gh$'], answer: 1, explain: '$mgh=\\tfrac12 mv^2\\Rightarrow v=\\sqrt{2gh}$.' },
    { type: 'alt', q: 'Con roce, la energía mecánica final cumple:', opts: ['$E_f=E_i$', '$E_f-E_i=W_{nc}$', '$E_f>E_i$', '$E_f=2E_i$'], answer: 1, explain: 'El cambio de energía mecánica es el trabajo de las fuerzas no conservativas (el roce, negativo).' },
    { type: 'vf', q: 'En $U_e=\\frac12 kx^2$, x es la posición del bloque medida desde la pared.', opts: ['Verdadero', 'Falso'], answer: 1, explain: 'Falso: x es la deformación del resorte respecto a su largo natural.' },
    { type: 'comp', q: 'Un resorte oscila con roce. Tras media ida-vuelta, su amplitud:', opts: ['Aumenta', 'No cambia', 'Disminuye una cantidad fija cada medio ciclo', 'Se vuelve cero al instante'], answer: 2, explain: 'El roce le quita $\\frac{2\\mu mg}{k}$ de amplitud cada medio ciclo: se amortigua de a poco.' }
  ]
});
/* =====================================================================
   UNIDAD 6 — MOVIMIENTO ARMÓNICO SIMPLE (MAS)
   ===================================================================== */
U({
  id: 'u6', block: 'energia', prio: 3, icon: '🌊',
  tag: 'Unidad 6 · MAS',
  title: 'Movimiento armónico simple',
  badge: { text: 'cae seguro', cls: 'pill-hot' },
  desc: 'Oscilaciones: ω, período, x(t), velocidad y aceleración máximas, energía en el MAS, equilibrio en vertical/inclinado, péndulo, y pequeñas oscilaciones. Incluido explícitamente en el temario.',
  lessons: [
    {
      id: 'u6l1', title: 'La ecuación del MAS y su solución',
      blocks: [
        { t: 'p', html: 'Movimiento armónico simple = el vaivén de un resorte. Cualquier sistema que, al sacarlo del equilibrio, sienta una fuerza recuperadora proporcional al desplazamiento, oscila de esta forma.' },
        { t: 'box', kind: 'form', title: 'De Newton a la ecuación del MAS', html: 'La fuerza del resorte es $F=-kx$ (hacia el equilibrio). Newton: $-kx=m\\ddot x$, que se reescribe$$\\ddot x+\\omega^2 x=0,\\qquad \\omega=\\sqrt{\\frac{k}{m}}$$ La solución es$$\\boxed{x(t)=A\\cos(\\omega t+\\phi)}$$' },
        { t: 'vars', items: [
          ['$A$', 'Amplitud: el desplazamiento máximo respecto al equilibrio.'],
          ['$\\omega$', 'Frecuencia angular $=\\sqrt{k/m}$ [rad/s]. Define qué tan rápido oscila.'],
          ['$\\phi$', 'Fase inicial: dónde empieza la oscilación en $t=0$. Sale de las condiciones iniciales.'],
          ['$x$', 'Desplazamiento respecto al equilibrio (NO respecto a la pared).']
        ]},
        { t: 'box', kind: 'form', title: 'Período, frecuencia y máximos', html: '$$T=\\frac{2\\pi}{\\omega}=2\\pi\\sqrt{\\frac{m}{k}},\\qquad f=\\frac{1}{T}=\\frac{\\omega}{2\\pi}$$ $$v(t)=-A\\omega\\sin(\\omega t+\\phi)\\Rightarrow v_{max}=A\\omega$$ $$a(t)=-A\\omega^2\\cos(\\omega t+\\phi)=-\\omega^2 x\\Rightarrow a_{max}=A\\omega^2$$' },
        { t: 'box', kind: 'peras', html: 'Con peras: $\\omega$ (qué tan rápido oscila) depende solo de la "dureza" del resorte $k$ y de la masa $m$: resorte más duro o masa más liviana ⇒ oscila más rápido. La amplitud $A$ (qué tan lejos llega) NO afecta el período: un columpio tarda lo mismo en ir y volver si lo sueltas de poco o de mucho.' },
        { t: 'example', title: 'Enunciado real (Taller 5) — leer un MAS', level: 'facil',
          body: '<p>"Un objeto oscila según $x=(4{,}00\\ \\mathrm{m})\\cos(\\pi t+\\pi/4)$. (a) Amplitud, frecuencia y período. (d) Rapidez y aceleración máximas."</p>',
          solution: '<div class="steps"><div class="step">Comparando con $A\\cos(\\omega t+\\phi)$: $A=4$ m, $\\omega=\\pi$ rad/s, $\\phi=\\pi/4$.</div><div class="step">(a) $f=\\omega/2\\pi=0{,}5$ Hz; $T=1/f=2$ s.</div><div class="step">(d) $v_{max}=A\\omega=4\\pi\\approx12{,}57$ m/s; $a_{max}=A\\omega^2=4\\pi^2\\approx39{,}5$ m/s².</div></div>' }
      ]
    },
    {
      id: 'u6l2', title: 'Energía en el MAS y el truco de la gravedad',
      blocks: [
        { t: 'p', html: 'En el MAS la energía se intercambia entre cinética y elástica, pero la suma es constante. Y hay un resultado clave que confunde a todos: la gravedad NO cambia la frecuencia.' },
        { t: 'box', kind: 'form', title: 'Energía en el MAS', html: 'La energía total es constante:$$E=\\tfrac12 kA^2=\\tfrac12 mv_{max}^2$$ En una posición $x$: $\\tfrac12 kA^2=\\tfrac12 mv^2+\\tfrac12 kx^2$, de donde $v=\\omega\\sqrt{A^2-x^2}$. En el equilibrio ($x=0$) toda la energía es cinética; en los extremos ($x=\\pm A$) toda es elástica.' },
        { t: 'box', kind: 'def', title: 'La gravedad solo corre el equilibrio (NO cambia ω)', html: 'En un resorte vertical o inclinado, la gravedad solo desplaza el punto de equilibrio:$$x_{eq}=\\frac{mg}{k}\\ \\text{(vertical)},\\qquad x_{eq}=\\frac{mg\\sin\\theta}{k}\\ \\text{(plano }\\theta)$$ Alrededor de ese nuevo equilibrio, oscila con la MISMA $\\omega=\\sqrt{k/m}$. <b>$g$ no entra en $\\omega$.</b>' },
        { t: 'box', kind: 'peras', html: 'Por qué: si mides $x$ desde el nuevo equilibrio, el término de la gravedad se cancela exactamente con el estiramiento extra del resorte, y la ecuación vuelve a ser $\\ddot x+\\tfrac{k}{m}x=0$. La gravedad solo decide DÓNDE oscila, no QUÉ TAN RÁPIDO.' },
        { t: 'fig', svg: FIG.springVert({}) },
        { t: 'example', title: 'Enunciado real (Ayudantía 10) — resorte vertical', level: 'medio',
          body: '<p>"Un bloque de masa $m$ cuelga de un resorte de largo natural $\\ell$ y constante $k$. Determine el nuevo largo de equilibrio y la frecuencia angular."</p>',
          solution: '<div class="steps"><div class="step">Equilibrio: la fuerza del resorte equilibra el peso. $k\\,x_{eq}=mg\\Rightarrow x_{eq}=mg/k$. Nuevo largo $=\\ell+mg/k$.</div><div class="step">Newton: $m\\ddot y=mg-ky$. Defino $u=y-y_{eq}$ (desde el equilibrio). Como $ky_{eq}=mg$: $m\\ddot u=-ku$.</div><div class="step">$\\Rightarrow \\ddot u+\\tfrac{k}{m}u=0\\Rightarrow \\boxed{\\omega=\\sqrt{k/m}}$. La gravedad NO aparece: misma frecuencia que en horizontal.</div></div>' },
        { t: 'fig', svg: FIG.twoSpringsH({}) },
        { t: 'example', title: 'Enunciado real (Ayudantía 10) — dos resortes', level: 'medio',
          body: '<p>"Un bloque $m$ oscila por dos resortes. El de la izquierda tiene constante $k$ y largo natural $x_0$; el de la derecha constante $k$ y largo natural $2x_0$. El sistema está confinado entre paredes a distancia $3x_0$. (b) Período. (c) Rapidez máxima para que nunca choque la pared izquierda."</p>',
          solution: '<div class="steps"><div class="step">Dos resortes que tiran del mismo bloque en direcciones opuestas se comportan como uno equivalente de constante $k_{eq}=k+k=2k$ (en paralelo). La fuerza neta es $-2kx$ alrededor del equilibrio.</div><div class="step">$\\ddot x+\\tfrac{2k}{m}x=0\\Rightarrow \\omega=\\sqrt{2k/m}\\Rightarrow \\boxed{T=2\\pi\\sqrt{\\dfrac{m}{2k}}=\\pi\\sqrt{\\dfrac{2m}{k}}}$.</div><div class="step">(c) Para no chocar la pared izquierda, la amplitud máxima es $A=x_0$. Entonces $v_{max}=A\\omega=\\boxed{x_0\\sqrt{2k/m}}$.</div></div>' }
      ]
    },
    {
      id: 'u6l3', title: 'MAS con poleas, bloques apilados y péndulos',
      blocks: [
        { t: 'p', html: 'Las versiones de prueba acoplan el resorte a poleas o a un bloque encima (con roce). El método: hallar la ecuación $\\ddot x+\\omega^2 x=0$ del sistema, leer $\\omega$, y aplicar condiciones iniciales.' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2023) — resorte con polea móvil', html: '"En una superficie sin roce hay un bloque 1 de masa $M$ unido a un resorte de constante $k$ y largo natural $x_0$. El bloque está unido por una barra a una polea ideal móvil $P$. Por la polea pasa una cuerda que sujeta a un bloque de masa $m$. (a) Ligadura entre aceleraciones. (c) Frecuencia de oscilación del bloque 1. (d) Posición del bloque 1 si en $t=0$ está en reposo a distancia $2x_0$ de la pared."' },
        { t: 'example', title: 'MAS con polea móvil (I2 2023)', level: 'dificil',
          body: '<p>Bloque 1 ($M$) con resorte; polea móvil conecta a bloque 2 ($m$) que cuelga. Halla $\\omega$ y $x_1(t)$.</p>',
          solution: '<div class="steps"><div class="step"><b>Ligadura</b> (polea móvil): $2x_1+y_2=$ cte $\\Rightarrow \\ddot y_2=-2\\ddot x_1$.</div><div class="step"><b>DCL:</b> bloque 1: $M\\ddot x_1=-k(x_1-x_0)+2T$. Bloque 2: $m\\ddot y_2=T-mg$, o sea $T=mg+m\\ddot y_2=mg-2m\\ddot x_1$.</div><div class="step">Sustituyo $T$: $M\\ddot x_1=-k(x_1-x_0)+2(mg-2m\\ddot x_1)=-k(x_1-x_0)+2mg-4m\\ddot x_1$.</div><div class="step">$(M+4m)\\ddot x_1=-k(x_1-x_0)+2mg$. Esto es un MAS alrededor de $x_{eq}=x_0+\\tfrac{2mg}{k}$, con $\\boxed{\\omega=\\sqrt{\\dfrac{k}{M+4m}}}$ (¡otra vez el 4 de la polea móvil!).</div><div class="step"><b>(d)</b> Con $x_1(0)=2x_0$ y $\\dot x_1(0)=0$: $\\boxed{x_1(t)=x_{eq}+(2x_0-x_{eq})\\cos(\\omega t)}$, con $x_{eq}=x_0+\\tfrac{2mg}{k}$.</div></div>' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (I2 2024) — bloques apilados', html: '"Un bloque $M$ sobre suelo sin roce, unido a un resorte $k$ fijo a la pared. Sobre $M$ descansa un bloque $m$ con roce estático $\\mu_s$ entre ellos. (a) Si el período es $T$ y $m$ no desliza, halla $m$ en términos de $k$, $T$, $M$. (c) Mínimo $\\mu_s$ para que $m$ no deslice."' },
        { t: 'fig', svg: FIG.stacked({}) },
        { t: 'example', title: 'Bloques apilados oscilando (I2 2024)', level: 'dificil',
          body: '<p>$M+m$ oscilan juntos (resorte $k$). Período $T$, parte de $d$ en reposo. Halla $m$ y el mínimo $\\mu_s$ para que $m$ no resbale.</p>',
          solution: '<div class="steps"><div class="step"><b>(a)</b> Oscilan juntos como masa $M+m$: $T=2\\pi\\sqrt{\\dfrac{M+m}{k}}\\Rightarrow M+m=\\dfrac{kT^2}{4\\pi^2}\\Rightarrow \\boxed{m=\\dfrac{kT^2}{4\\pi^2}-M}$.</div><div class="step"><b>(b)</b> Desde reposo en $d$: $x(t)=d\\cos(\\omega t)$, con $\\omega=\\sqrt{k/(M+m)}$. La aceleración máxima es $a_{max}=d\\omega^2=\\dfrac{kd}{M+m}$.</div><div class="step"><b>(c)</b> La ÚNICA fuerza horizontal sobre $m$ es el roce, que debe darle su aceleración: $f=m\\,a$. En el peor caso $a=a_{max}$, y el roce máximo es $\\mu_s mg$. Condición: $\\mu_s mg\\ge m\\,a_{max}\\Rightarrow \\boxed{\\mu_s\\ge\\dfrac{a_{max}}{g}=\\dfrac{kd}{(M+m)g}}$.</div></div>' },
        { t: 'box', kind: 'form', title: 'Péndulo simple y pequeñas oscilaciones', html: 'Péndulo de largo $L$: $\\ddot\\theta+\\dfrac{g}{L}\\sin\\theta=0$. Para ángulos pequeños ($\\sin\\theta\\approx\\theta$): MAS con $\\omega=\\sqrt{g/L}$, $T=2\\pi\\sqrt{L/g}$ (¡no depende de la masa!). En general, para "pequeñas oscilaciones" en torno a un equilibrio, aproxima la fuerza/energía y lee $\\omega$.' },
        { t: 'fig', svg: FIG.dome({cap:'Partícula dentro de un cascarón esférico: oscila en torno al fondo.'}) },
        { t: 'example', title: 'Enunciado real (Ayudantía 10) — cascarón esférico', level: 'dificil',
          body: '<p>"Una partícula $m$ se mueve dentro de un cascarón esférico de radio $R$, bajo gravedad $g$. Determine la frecuencia de las pequeñas oscilaciones en torno al equilibrio (el fondo)."</p>',
          solution: '<div class="steps"><div class="step">Coordenada: el ángulo $\\theta$ desde el fondo. Energías: $K=\\tfrac12 mR^2\\dot\\theta^2$ y $U=mgR(1-\\cos\\theta)$.</div><div class="step">Conservación ($\\tfrac{d}{dt}E=0$) o Newton tangencial dan: $R\\ddot\\theta+g\\sin\\theta=0\\Rightarrow \\ddot\\theta+\\tfrac{g}{R}\\sin\\theta=0$.</div><div class="step">Pequeñas oscilaciones ($\\sin\\theta\\approx\\theta$): $\\ddot\\theta+\\tfrac{g}{R}\\theta=0\\Rightarrow \\omega=\\sqrt{g/R}$. Igual que un péndulo de largo $R$.</div><div class="step">Con $R=0{,}2$, $g=10$: $\\omega=\\sqrt{50}\\approx7{,}07$ rad/s, $f=\\omega/2\\pi\\approx1{,}13$ Hz.</div></div>' }
      ]
    }
  ],
  flashcards: [
    { q: 'Frecuencia angular del resorte', a: '$\\omega=\\sqrt{k/m}$. El período es $T=2\\pi\\sqrt{m/k}$.' },
    { q: 'Solución general del MAS', a: '$x(t)=A\\cos(\\omega t+\\phi)$, con $A$ y $\\phi$ de las condiciones iniciales.' },
    { q: 'Velocidad y aceleración máximas en MAS', a: '$v_{max}=A\\omega$, $a_{max}=A\\omega^2$.' },
    { q: 'Energía total en el MAS', a: '$E=\\tfrac12 kA^2=\\tfrac12 mv_{max}^2$ (constante).' },
    { q: '¿La gravedad cambia la frecuencia de un resorte vertical?', a: 'No. Solo corre el equilibrio a $x_{eq}=mg/k$. La frecuencia sigue siendo $\\omega=\\sqrt{k/m}$.' },
    { q: 'Período de un péndulo simple', a: '$T=2\\pi\\sqrt{L/g}$ (no depende de la masa). Vale para ángulos pequeños.' },
    { q: 'Bloques apilados: mínimo μ_s para que el de arriba no resbale', a: '$\\mu_s\\ge a_{max}/g=\\frac{kd}{(M+m)g}$ (el roce debe dar la aceleración máxima).' },
    { q: 'Dos resortes iguales tirando del bloque en paralelo: ω', a: '$\\omega=\\sqrt{2k/m}$ (las constantes se suman).' }
  ],
  quiz: [
    { type: 'alt', q: 'Si duplicas la masa de un resorte oscilante, el período:', opts: ['Se duplica', 'Se multiplica por $\\sqrt2$', 'Se reduce a la mitad', 'No cambia'], answer: 1, explain: '$T=2\\pi\\sqrt{m/k}$: al duplicar $m$, $T$ crece por $\\sqrt2$.' },
    { type: 'vf', q: 'La gravedad cambia la frecuencia de oscilación de un resorte vertical.', opts: ['Verdadero', 'Falso'], answer: 1, explain: 'Falso: solo corre el punto de equilibrio; $\\omega=\\sqrt{k/m}$ no cambia.' },
    { type: 'alt', q: 'La velocidad máxima en un MAS de amplitud A es:', opts: ['$A$', '$A\\omega$', '$A\\omega^2$', '$\\omega$'], answer: 1, explain: '$v_{max}=A\\omega$, alcanzada al pasar por el equilibrio.' },
    { type: 'alt', q: 'El período de un péndulo simple de largo L (ángulo pequeño):', opts: ['$2\\pi\\sqrt{L/g}$', '$2\\pi\\sqrt{g/L}$', '$2\\pi\\sqrt{m/k}$', 'depende de la masa'], answer: 0, explain: '$T=2\\pi\\sqrt{L/g}$, independiente de la masa.' }
  ]
});
/* =====================================================================
   UNIDAD 7 — IMPULSO Y MOMENTUM
   ===================================================================== */
U({
  id: 'u7', block: 'momentum', prio: 3, icon: '💥',
  tag: 'Unidad 7 · Momentum',
  title: 'Impulso y momentum',
  badge: { text: 'entra seguro', cls: 'pill-hot' },
  desc: 'Momentum, impulso, conservación del momentum, y choques (elásticos, inelásticos y con coeficiente de restitución). El último gran tema del temario.',
  lessons: [
    {
      id: 'u7l1', title: 'Momentum, impulso y la 2ª ley en otra forma',
      blocks: [
        { t: 'p', html: 'El momentum mide "cuánto movimiento" tiene un cuerpo. El impulso mide el efecto de una fuerza acumulada en el TIEMPO. Son la versión "temporal" de la 2ª ley (energía era la versión "espacial").' },
        { t: 'box', kind: 'form', title: 'Momentum e impulso', html: 'Momentum lineal: $\\vec p=m\\vec v$.<br>2ª ley: $\\sum\\vec F=\\dfrac{d\\vec p}{dt}$.<br>Principio impulso-momentum:$$\\boxed{\\vec J=\\int_{t_1}^{t_2}\\sum\\vec F\\,dt=\\vec p_2-\\vec p_1=\\Delta\\vec p}$$' },
        { t: 'vars', items: [
          ['$\\vec p=m\\vec v$', 'Vector, en la dirección de la velocidad. Unidad: kg·m/s = N·s.'],
          ['$\\vec J$', 'Impulso = área bajo la curva fuerza-tiempo. Es igual al cambio de momentum.'],
          ['Por componentes', '$\\int\\sum F_x\\,dt=\\Delta p_x$, y análogo en $y$, $z$.']
        ]},
        { t: 'box', kind: 'def', title: 'Fuerzas impulsivas vs no impulsivas', html: 'Durante un choque (muy breve), las fuerzas impulsivas (el golpe) son enormes; las no impulsivas (el peso) son pequeñas y se <b>desprecian</b> durante el impacto. Por eso en un choque el momentum casi no cambia por la gravedad.' },
        { t: 'box', kind: 'peras', html: 'Con peras: un mismo cambio de momentum lo puedes lograr con un golpe fuerte y corto, o con una fuerza suave y larga (igual área bajo $F$ vs $t$). Por eso un airbag te salva: alarga el tiempo del choque, así la fuerza máxima baja para el mismo $\\Delta p$.' },
        { t: 'example', title: 'Enunciado real (Ayudantía 11) — impulso variable', level: 'medio',
          body: '<p>"Un chancho de masa $m$ comienza del reposo, propulsado por $p=\\kappa(1-e^{-t/2})$ (en Newton). Sin fricción. Determine la velocidad en $t=10$ s."</p>',
          solution: '<div class="steps"><div class="step">Impulso-momentum: $\\int_0^{10}\\kappa(1-e^{-t/2})\\,dt=mv-0$.</div><div class="step">$\\int_0^{10}(1-e^{-t/2})dt=\\big[t+2e^{-t/2}\\big]_0^{10}=(10+2e^{-5})-(0+2)=8+2e^{-5}$.</div><div class="step">$\\Rightarrow mv=\\kappa(8+2e^{-5})\\Rightarrow \\boxed{v=\\dfrac{2\\kappa}{m}(4+e^{-5})}$.</div></div>' },
        { t: 'example', title: 'Enunciado real (Clase 15) — raqueta de tenis', level: 'medio',
          body: '<p>Pelota $m=0{,}02$ kg llega a $50$ ft/s ($-x$) y sale a $70$ ft/s a $15°$, contacto $0{,}02$ s. Halla la fuerza media $R$ y su ángulo.</p>',
          solution: '<div class="steps"><div class="step">Impulso por eje: $m(v_{1})_x+R_x\\,\\Delta t=m(v_2)_x$. En x: $0{,}02(-50)+R_x(0{,}02)=0{,}02(70\\cos15°)$.</div><div class="step">$R_x=\\dfrac{0{,}02(67{,}6+50)}{0{,}02}=117{,}6\\approx117{,}5$ N. En y (despreciando el peso, no impulsivo): $R_y(0{,}02)=0{,}02(70\\sin15°)\\Rightarrow R_y\\approx17{,}9$ N.</div><div class="step">$|R|=\\sqrt{117{,}5^2+17{,}9^2}\\approx118{,}9$ N; ángulo $\\beta=\\arctan(17{,}9/117{,}5)\\approx8{,}5°$.</div></div>' }
      ]
    },
    {
      id: 'u7l2', title: 'Conservación del momentum y choques',
      blocks: [
        { t: 'p', html: 'La joya del tema: si no hay fuerzas externas (o durante un choque breve), el momentum total del sistema se conserva. Esto resuelve casi todos los problemas de choque.' },
        { t: 'box', kind: 'form', title: 'Conservación del momentum', html: 'Si $\\sum\\vec F_{ext}=0$ (o durante un impacto breve), el momentum total es constante:$$\\boxed{\\sum m_i\\vec v_i\\,\\big|_{antes}=\\sum m_i\\vec v_i\\,\\big|_{después}}$$ Se aplica por componentes ($x$ e $y$ por separado).' },
        { t: 'box', kind: 'def', title: 'Los dos tipos de choque', html: '<b>Perfectamente inelástico</b> (quedan PEGADOS): se conserva el momentum, NO la energía cinética. $\\;mv_0=(M+m)v_f$.<br><b>Elástico</b>: se conservan momentum Y energía cinética. Dos ecuaciones, dos incógnitas.<br>En todos: <b>el momentum SIEMPRE se conserva</b>; la energía cinética solo en el elástico.' },
        { t: 'box', kind: 'form', title: 'Choque elástico 1D (M en reposo)', html: 'Resolviendo momentum + energía, si $m$ con $v_0$ choca a $M$ en reposo:$$v_{mf}=\\frac{1-M/m}{1+M/m}v_0,\\qquad v_{Mf}=\\frac{2}{1+M/m}v_0$$ Casos: si $M=m$ se intercambian velocidades; si $m<M$, $m$ rebota; si $m>M$, ambos avanzan.' },
        { t: 'box', kind: 'form', title: 'Coeficiente de restitución (cuando lo dan)', html: 'Algunos problemas dan $e$ (entre 0 y 1):$$e=\\frac{\\text{velocidad de separación}}{\\text{velocidad de acercamiento}}=\\frac{v_{2f}-v_{1f}}{v_{1i}-v_{2i}}$$ $e=1$ ⇒ elástico; $e=0$ ⇒ quedan pegados (inelástico). Se usa JUNTO con conservación de momentum.' },
        { t: 'box', kind: 'peras', html: 'Con peras: en un choque, "lo que entra de movimiento total, sale" (momentum se conserva siempre). Lo que cambia es si la energía de movimiento se mantiene (choque elástico, como bolas de billar) o se pierde en deformar/calentar (inelástico, como dos autos que quedan abollados y pegados).' },
        { t: 'fig', svg: FIG.collision1D({m1:'m',m2:'M',v1:'v₀',cap:'El astronauta (M) atrapa el objeto (m): quedan pegados.'}) },
        { t: 'example', title: 'Enunciado real (Compilado 4.1) — astronauta', level: 'facil',
          body: '<p>"Un astronauta de masa $M$ está en reposo. Un objeto de masa $m$ viaja a velocidad $v_0$. El astronauta lo atrapa y no lo suelta. ¿Qué velocidad $v_f$ adquiere?"</p>',
          solution: '<div class="steps"><div class="step">Quedan pegados ⇒ inelástico. Momentum: $mv_0=(M+m)v_f$.</div><div class="step">$\\boxed{v_f=\\dfrac{m}{M+m}v_0}$. (La energía cinética baja: parte se "gasta" en la captura.)</div></div>' },
        { t: 'fig', svg: FIG.wedgeMomentum({}) },
        { t: 'example', title: 'Enunciado real (Compilado 4.2) — cuña sin roce', level: 'medio',
          body: '<p>"Cuña $M=10$ kg sobre superficie sin roce. Bloque $m=5$ kg parte del reposo y desliza por la cuña (con roce entre ellos). Cuando el bloque tiene velocidad horizontal 6 m/s a la izquierda, ¿cuál es la velocidad de la cuña?"</p>',
          solution: '<div class="steps"><div class="step">No hay fuerzas externas horizontales (suelo sin roce) ⇒ momentum horizontal del sistema se conserva, y empieza en 0.</div><div class="step">$0=m v_{x,bloque}+M v_{cuña}\\Rightarrow 0=5(-6)+10\\,v_{cuña}$.</div><div class="step">$v_{cuña}=\\dfrac{30}{10}=\\boxed{3\\ \\mathrm{m/s\\ a\\ la\\ derecha}}$. (El bloque va a la izquierda, la cuña retrocede a la derecha: se compensan.)</div></div>' },
        { t: 'fig', svg: FIG.collision1D({m1:'m',m2:'M',v1:'v₀',cap:'Bala (m) choca elásticamente con el bloque (M) en reposo.'}) },
        { t: 'example', title: 'Enunciado real (Compilado 4.15) — bala en bloque (elástico)', level: 'dificil',
          body: '<p>"Sistema aislado: una bala $m$ con rapidez $v_0$ y un bloque $M$ en reposo sobre superficie sin fricción. El choque es perfectamente elástico. ¿Cuáles son las velocidades de la bala ($v_1$) y del bloque ($v_2$) después?"</p>',
          solution: '<div class="steps"><div class="step">Elástico ⇒ se conservan momentum Y energía cinética. Es el choque 1D con $M$ en reposo, así que se aplican las fórmulas directas:</div><div class="step">$\\boxed{v_1=\\dfrac{1-M/m}{1+M/m}\\,v_0}$, $\\boxed{v_2=\\dfrac{2}{1+M/m}\\,v_0}$.</div><div class="step">Lectura: si la bala es más liviana que el bloque ($m<M$), $v_1<0$: la bala REBOTA. El bloque siempre sale hacia adelante. Si fueran iguales, la bala se detiene y el bloque sale con $v_0$ (intercambian velocidades).</div></div>' },
        { t: 'example', title: 'Enunciado real (Taller 6) — bola y bloque en plano (restitución + impulso)', level: 'dificil',
          body: '<p>"Una bola de 2 kg viaja horizontalmente a 10 m/s y choca con un bloque de 6 kg que baja un plano de 20° a 1 m/s. El coeficiente de restitución es $e=0{,}6$ y el impacto dura 0,006 s. (a) Velocidades justo después. (b) Fuerza impulsora promedio entre bola y bloque."</p>',
          solution: '<div class="steps"><div class="step"><b>(a)</b> Proyecto sobre el eje del plano. Momentum: $2(10\\cos20°)+6(-1)=2v_A+6v_B$. Restitución: $e\\,[10\\cos20°-(-1)]=v_B-v_A$.</div><div class="step">Resolviendo el sistema (con $\\cos20°\\approx0{,}94$): $v_A\\approx-3{,}08$ m/s (la bola rebota), $v_B\\approx3{,}16$ m/s.</div><div class="step"><b>(b)</b> Impulso-momentum sobre el bloque: $6(-1)+F(0{,}006)=6(3{,}16)\\Rightarrow F=\\dfrac{6(3{,}16+1)}{0{,}006}\\approx\\boxed{4{,}16\\ \\mathrm{kN}}$. (La fuerza es enorme porque el impacto es brevísimo: por eso es impulsiva.)</div></div>' }
      ]
    },
    {
      id: 'u7l3', title: 'Choques en 2D y con restitución',
      blocks: [
        { t: 'p', html: 'En 2D, el momentum se conserva en cada eje por separado. Con coeficiente de restitución, agregas esa ecuación al momentum. Y muchos problemas combinan energía (antes/después) con momentum (en el choque).' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (Ayudantía 11) — discos 2D', level: 'medio',
          html: '"La masa del disco $m_2$ es 25% menor que la de $m_1$. $m_2$ tiene rapidez inicial $5$ m/s. Tras la colisión ambos quedan pegados. ¿Qué ángulo $\\beta$ hace que la rapidez final sea la mitad de la inicial de $m_2$?" (Antes: $m_1$ y $m_2$ se aproximan, cada uno a ángulo $\\beta$ con la vertical; después: pegados, hacia arriba.)' },
        { t: 'fig', svg: FIG.collision2D({}) },
        { t: 'example', title: 'Discos que quedan pegados en 2D (Ayudantía 11)', level: 'dificil',
          body: '<p>$m_2=0{,}75\\,m_1$, $v_{2i}=5$ m/s, $v_f=2{,}5$ m/s. Halla $\\beta$.</p>',
          solution: '<div class="steps"><div class="step"><b>Eje x</b> (se cancelan para que salgan rectos hacia arriba): $m_1 v_{1i}\\cos\\beta-m_2 v_{2i}\\cos\\beta=0\\Rightarrow m_1 v_{1i}=m_2 v_{2i}$. Entonces $v_{1i}=\\tfrac{m_2}{m_1}v_{2i}=0{,}75\\cdot5=3{,}75$ m/s.</div><div class="step"><b>Eje y</b> (ambos suben tras pegarse): $m_1 v_{1i}\\sin\\beta+m_2 v_{2i}\\sin\\beta=(m_1+m_2)v_f$.</div><div class="step">Con $m_2=0{,}75m_1$, $v_f=2{,}5$: $m_1(3{,}75)\\sin\\beta+0{,}75m_1(5)\\sin\\beta=1{,}75m_1(2{,}5)$.</div><div class="step">$(3{,}75+3{,}75)\\sin\\beta=4{,}375\\Rightarrow \\sin\\beta=\\tfrac{4{,}375}{7{,}5}=\\tfrac{7}{12}\\Rightarrow \\boxed{\\beta\\approx35{,}7°}$.</div></div>' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (Ayudantía 11) — m1 baja curva, choca m2', html: '"Un cuerpo $m_1=m$ se desliza por una superficie curva sin fricción de altura $h$ e impacta a $m_2=m/2$ en reposo. Tras la colisión ambos salen horizontalmente (proyectil) desde altura $H$. (a) Velocidades de salida en función de $e$. (b) Si $e=1$, sus valores. (c) Distancia $D$ si $e=0$."' },
        { t: 'example', title: 'Curva + choque + proyectil (Ayudantía 11)', level: 'dificil',
          body: '<p>$m_1=m$ baja altura $h$, choca a $m_2=m/2$ (restitución $e$). Halla velocidades, y $D$ si $e=0$.</p>',
          solution: '<div class="steps"><div class="step"><b>Antes del choque:</b> energía da $v_{1i}=\\sqrt{2gh}$.</div><div class="step"><b>En el choque:</b> momentum $m v_{1i}=m v_{1f}+\\tfrac{m}{2}v_{2f}$ ⇒ $2v_{1i}=2v_{1f}+v_{2f}$. Restitución: $e\\,v_{1i}=v_{2f}-v_{1f}$.</div><div class="step">Resolviendo: $v_{1f}=\\dfrac{(2-e)\\sqrt{2gh}}{3}$, $v_{2f}=\\dfrac{2(1+e)\\sqrt{2gh}}{3}$.</div><div class="step"><b>(c) Si $e=0$</b> (pegados): $v_f=\\tfrac{2}{3}\\sqrt{2gh}$. Proyectil desde altura $H$: $t=\\sqrt{2H/g}$. $D=v_f\\,t=\\tfrac{2}{3}\\sqrt{2gh}\\sqrt{2H/g}=\\boxed{\\tfrac{4}{3}\\sqrt{Hh}}$.</div></div>' },
        { t: 'box', kind: 'exam', title: 'Enunciado real (Taller 6) — autos 2D inelástico', html: '"Dos autos $m_A=2000$ kg y $m_B=1500$ kg colisionan y quedan unidos, moviéndose a $u=50$ km/h. $A$ viaja a $45°$ del eje x, $B$ en $-x$. Tras el choque la velocidad forma $30°$ con el eje y. (c) Magnitudes de $v_A$ y $v_B$. (d) ¿Qué fracción de energía cinética se pierde?" Respuestas: $v_A\\approx107{,}2$ km/h, $v_B\\approx42{,}7$ km/h; se pierde $\\approx66\\%$.' }
      ]
    }
  ],
  flashcards: [
    { q: 'Momentum lineal e impulso', a: '$\\vec p=m\\vec v$; impulso $\\vec J=\\int\\vec F\\,dt=\\Delta\\vec p$.' },
    { q: '¿Qué se conserva SIEMPRE en un choque?', a: 'El momentum total (en cada eje). La energía cinética solo si es elástico.' },
    { q: 'Choque inelástico (quedan pegados): ecuación', a: '$mv_0=(M+m)v_f$. La energía cinética NO se conserva.' },
    { q: 'Choque elástico: ¿qué se conserva?', a: 'Momentum Y energía cinética (dos ecuaciones).' },
    { q: 'Coeficiente de restitución', a: '$e=\\frac{v_{2f}-v_{1f}}{v_{1i}-v_{2i}}$ (separación/acercamiento). $e=1$ elástico, $e=0$ pegados.' },
    { q: 'Durante un choque breve, ¿por qué se desprecia el peso?', a: 'Porque la fuerza del impacto es enorme comparada con el peso (no impulsiva); su impulso en ese instante es despreciable.' },
    { q: 'Bloque desliza por cuña sin roce con el suelo: ¿qué se conserva?', a: 'El momentum horizontal del sistema (parte de 0). Por eso la cuña retrocede.' }
  ],
  quiz: [
    { type: 'vf', q: 'En todo choque se conserva la energía cinética.', opts: ['Verdadero', 'Falso'], answer: 1, explain: 'Falso: solo en el elástico. En el inelástico se pierde energía cinética (el momentum sí se conserva siempre).' },
    { type: 'alt', q: 'Un objeto $m$ a $v_0$ es atrapado por $M$ en reposo (quedan pegados). La velocidad final es:', opts: ['$v_0$', '$\\frac{m}{M+m}v_0$', '$\\frac{M}{M+m}v_0$', '$\\frac{m}{M}v_0$'], answer: 1, explain: 'Inelástico: $mv_0=(M+m)v_f\\Rightarrow v_f=\\frac{m}{M+m}v_0$.' },
    { type: 'alt', q: 'El impulso de una fuerza es igual a:', opts: ['El cambio de energía cinética', 'El cambio de momentum', 'La fuerza por la distancia', 'La masa por la aceleración'], answer: 1, explain: 'Impulso-momentum: $\\int F\\,dt=\\Delta p$.' },
    { type: 'comp', q: 'Dos autos chocan y quedan pegados. Para hallar la velocidad final usas:', opts: ['Conservación de energía', 'Conservación de momentum', 'El teorema trabajo-energía', 'MAS'], answer: 1, explain: 'Quedan pegados (inelástico): se conserva el momentum, no la energía.' }
  ]
});
/* =====================================================================
   UNIDAD 8 — SIMULACRO, FORMULARIO Y PLAN
   ===================================================================== */
U({
  id: 'u8', block: 'extra', prio: 2, icon: '🏁',
  tag: 'Unidad 8 · Para llegar listo',
  title: 'Simulacro, formulario y plan',
  badge: { text: 'al final', cls: 'pill-new' },
  desc: 'Un simulacro tipo Prueba 2 real (con enunciados de prueba y solución paso a paso), el formulario completo para memorizar, y el plan de estudio día a día.',
  lessons: [
    {
      id: 'u8l1', title: 'Simulacro tipo Prueba 2 (enunciados reales)',
      blocks: [
        { t: 'p', html: 'Cuatro problemas estilo Prueba 2 real, uno por bloque de materia. Intenta cada uno en papel ANTES de mirar la solución. Date el tiempo de la prueba. Recuerda: $g=10\\,\\mathrm{m/s^2}$.' },
        { t: 'box', kind: 'exam', html: 'Formato real del Prueba 2: problemas de DESARROLLO (te dan puntaje por DCL, ecuaciones y procedimiento). Escribe cada paso, dibuja el DCL, y deja la respuesta en función de los datos. No te saltes el dibujo.' },
        { t: 'fig', svg: FIG.incline({deg:30,label:'m',mu:true,vF:'a',cap:'Bloque en un plano inclinado que puede acelerar.'}) },
        { t: 'example', title: 'P1 · Newton (I2 2023, enunciado real)', level: 'medio',
          body: '<p>"Considere un bloque sobre un plano inclinado de ángulo $\\theta$. Los coeficientes son $\\mu_s$ y $\\mu_c$. (b) Encuentre el máximo $\\theta$ tal que el bloque permanezca en reposo cuando el plano NO se mueve. Justifique la dirección del roce y su tipo."</p>',
          solution: '<div class="steps"><div class="step"><b>DCL:</b> peso $mg$ (abajo), normal $N$ (perpendicular al plano), roce $f$ (a lo largo del plano). El bloque tiende a deslizar hacia abajo, así que el roce estático apunta hacia ARRIBA del plano.</div><div class="step">Ejes en el plano. Perpendicular: $N=mg\\cos\\theta$. Paralelo (equilibrio): $mg\\sin\\theta=f$.</div><div class="step">En el máximo ángulo, el roce está en su tope: $f=\\mu_s N=\\mu_s mg\\cos\\theta$.</div><div class="step">Igualo: $mg\\sin\\theta=\\mu_s mg\\cos\\theta\\Rightarrow \\tan\\theta=\\mu_s\\Rightarrow \\boxed{\\theta_{max}=\\arctan\\mu_s}$. Es roce ESTÁTICO (no desliza) hacia arriba (se opone a la tendencia a caer).</div></div>' },
        { t: 'example', title: 'P2 · Energía + plano con roce (I2 2021, enunciado real)', level: 'dificil',
          body: '<p>"Un bloque $m$ unido a un resorte ($k$, largo natural $\\ell_0=3mg/k$) fijo en $O$ a altura $\\ell_0$. En $A$ (bajo $O$) se le da velocidad $v_A$ hacia $B$; en $B$ se detiene y el largo del resorte es $\\ell_b=3\\ell_0/2$. (a) Encuentre $v_A$." </p>',
          solution: '<div class="steps"><div class="step">Entre $A$ y $B$ el bloque va por el plano horizontal; en ese tramo (tómalo sin roce para la parte a) se conserva la energía: $E_A=E_B$.</div><div class="step">En $A$ el resorte está en su largo natural (deformación 0), el bloque tiene $v_A$: $E_A=\\tfrac12 mv_A^2$.</div><div class="step">En $B$ está en reposo, el resorte estirado $\\Delta\\ell=\\ell_b-\\ell_0=\\tfrac{3\\ell_0}{2}-\\ell_0=\\tfrac{\\ell_0}{2}$: $E_B=\\tfrac12 k\\big(\\tfrac{\\ell_0}{2}\\big)^2=\\tfrac{k\\ell_0^2}{8}$.</div><div class="step">$\\tfrac12 mv_A^2=\\tfrac{k\\ell_0^2}{8}\\Rightarrow \\boxed{v_A=\\ell_0\\sqrt{\\dfrac{k}{4m}}=\\dfrac{\\ell_0}{2}\\sqrt{\\dfrac{k}{m}}}$.</div></div>' },
        { t: 'example', title: 'P3 · MAS (Ayudantía 10, enunciado real)', level: 'dificil',
          body: '<p>"Una partícula de masa $m$ se mueve a lo largo de la curva $y=4x^2$ bajo gravedad $g$ (eje $y$ hacia arriba). Encuentre la frecuencia de las pequeñas oscilaciones en torno al equilibrio. Si $m=0{,}2$ kg, $g=10$, halla $f$ en Hz. Hint: cerca de $x=0$."</p>',
          solution: '<div class="steps"><div class="step">Energías: $U=mgy=4mgx^2$. Para la cinética, $\\dot y=8x\\dot x$, así $K=\\tfrac12 m(\\dot x^2+\\dot y^2)=\\tfrac12 m\\dot x^2(1+64x^2)$.</div><div class="step">Pequeñas oscilaciones ($x\\approx0$, $64x^2\\ll1$): $K\\approx\\tfrac12 m\\dot x^2$. Energía total $E=\\tfrac12 m\\dot x^2+4mgx^2$.</div><div class="step">$\\tfrac{dE}{dt}=0$: $m\\dot x\\ddot x+8mgx\\dot x=0\\Rightarrow \\ddot x+8gx=0\\Rightarrow \\omega=\\sqrt{8g}$.</div><div class="step">$f=\\dfrac{\\sqrt{8g}}{2\\pi}=\\dfrac{\\sqrt{80}}{2\\pi}\\approx\\boxed{1{,}42\\ \\mathrm{Hz}}$. (La masa no aparece: típico de oscilaciones bajo gravedad.)</div></div>' },
        { t: 'example', title: 'P4 · Momentum + restitución (Ayudantía 11, enunciado real)', level: 'dificil',
          body: '<p>"Se colocan $n$ esferas iguales de masa $m$ en fila, una junto a otra. La esfera 1 tiene velocidad $v_1$. Determine la velocidad de la esfera $n$ justo después de ser golpeada por la $(n-1)$. El coeficiente de restitución entre esferas es $e$."</p>',
          solution: '<div class="steps"><div class="step">Cada choque es entre dos esferas iguales (la que viene y la siguiente en reposo). Momentum: $v_{1}=v_{1f}+v_{2f}$. Restitución: $e\\,v_{1}=v_{2f}-v_{1f}$.</div><div class="step">Sumo las dos: $v_1(1+e)=2v_{2f}\\Rightarrow v_{2f}=\\dfrac{(1+e)}{2}v_1$. Cada choque multiplica la velocidad por el factor $\\tfrac{1+e}{2}$.</div><div class="step">Tras $(n-1)$ choques sucesivos: $\\boxed{v_n=v_1\\left(\\dfrac{1+e}{2}\\right)^{n-1}}$.</div><div class="step">Chequeo: si $e=1$ (elástico) y masas iguales, el factor es 1 y la velocidad pasa intacta de esfera en esfera (como el péndulo de Newton). ✓</div></div>' }
      ]
    },
    {
      id: 'u8l2', title: 'Formulario completo (memorízalo)',
      blocks: [
        { t: 'box', kind: 'warn', html: 'Esto es lo mínimo que debes tener en la cabeza el día del Prueba 2. Repásalo en voz alta hasta que salga solo. $g=10\\,\\mathrm{m/s^2}$ salvo que digan otra cosa.' },
        { t: 'h3', html: 'Newton y fuerzas' },
        { t: 'box', kind: 'form', html: '$\\sum\\vec F=m\\vec a$. &nbsp; Roce: $f_s\\le\\mu_s N$ (estático), $f_k=\\mu_k N$ (cinético).<br>Plano $\\theta$: $N=mg\\cos\\theta$; baja $mg\\sin\\theta$. &nbsp; Hooke: $F=k|\\Delta\\ell|$.<br>"¿Se mueve?": comparar fuerza motriz con $\\mu_s N$.' },
        { t: 'h3', html: 'Ligaduras y poleas' },
        { t: 'box', kind: 'form', html: 'Largo cuerda cte ⇒ derivar 2 veces. Polea fija: $a_1=-a_2$. Polea móvil: $a_1=2a_2$, $T_{sop}=2T$ (firma: un 4 en el denominador).<br>Atwood: $a=\\frac{(m_1-m_2)g}{m_1+m_2}$.' },
        { t: 'h3', html: 'Circular' },
        { t: 'box', kind: 'form', html: '$a_c=v^2/R=\\omega^2 R$. Polares: $\\vec a=(\\ddot r-r\\dot\\theta^2)\\hat u_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\hat u_\\theta$.<br>Círculo: $a_r=-\\omega^2 R$. Rizo arriba: $v^2=gR$ ($N=0$). Péndulo desde horizontal: $T_{abajo}=3mg$.' },
        { t: 'h3', html: 'Trabajo y energía' },
        { t: 'box', kind: 'form', html: '$K=\\tfrac12 mv^2$. $W_{tot}=\\Delta K$. $W_{peso}=-mg\\Delta h$, $W_{res}=\\tfrac12 k(x_i^2-x_f^2)$, $W_{roce}=-\\mu_k N s$.<br>$U_g=mgh$, $U_e=\\tfrac12 kx^2$. Sin roce: $E_i=E_f$. Con roce: $E_f-E_i=W_{nc}$.' },
        { t: 'h3', html: 'MAS' },
        { t: 'box', kind: 'form', html: '$\\omega=\\sqrt{k/m}$, $T=2\\pi\\sqrt{m/k}$, $x(t)=A\\cos(\\omega t+\\phi)$.<br>$v_{max}=A\\omega$, $a_{max}=A\\omega^2$, $E=\\tfrac12 kA^2$. Equilibrio: $x_{eq}=mg\\sin\\theta/k$ ($g$ NO entra en $\\omega$). Péndulo: $T=2\\pi\\sqrt{L/g}$.' },
        { t: 'h3', html: 'Impulso y momentum' },
        { t: 'box', kind: 'form', html: '$\\vec p=m\\vec v$. $\\vec J=\\int\\vec F\\,dt=\\Delta\\vec p$. Conservación: $\\sum m\\vec v$ antes $=$ después (por eje).<br>Inelástico (pegados): solo momentum. Elástico: momentum + $K$. Restitución: $e=\\frac{v_{2f}-v_{1f}}{v_{1i}-v_{2i}}$.' },
        { t: 'h3', html: 'Trigonometría y datos' },
        { t: 'box', kind: 'form', html: '$\\sin30=0{,}5$, $\\cos30\\approx0{,}87$; $\\sin37\\approx0{,}6$, $\\cos37\\approx0{,}8$ (triángulo 3-4-5); $\\sin45=\\cos45=1/\\sqrt2\\approx0{,}71$. $g=10$ m/s².' }
      ]
    },
    {
      id: 'u8l3', title: 'Cómo estudiar de aquí al viernes (plan y consejos)',
      blocks: [
        { t: 'box', kind: 'peras', title: 'Plan día a día', html: '<b>Día 1:</b> U0 (gatillos + qué memorizar) + U1 (Newton/DCL) + U4 y U5 (energía, lo que MÁS cae). Haz TODOS los ejercicios en papel.<br><b>Día 2:</b> U2 (poleas) + U3 (circular) + U6 (MAS). Repite los "Ver solución" tapando la respuesta.<br><b>Día 3:</b> U7 (momentum) + rehacer los ejercicios "difícil" que te costaron.<br><b>Víspera:</b> memoriza el formulario (8.2), haz el simulacro (8.1) cronometrado, y duerme bien.' },
        { t: 'box', kind: 'def', title: 'Las 5 reglas de oro para la prueba', html: '1) <b>SIEMPRE dibuja el DCL primero.</b> Vale puntos y evita errores.<br>2) <b>Identifica el método por los gatillos</b> (U0): energía / Newton / momentum.<br>3) <b>Escribe las ecuaciones simbólicamente</b> y despeja al final; reemplaza números recién al cierre.<br>4) <b>Cuida los signos</b> del roce y de las alturas. Elige un sentido positivo y respétalo.<br>5) <b>Chequea unidades y casos límite</b> (¿la respuesta tiene sentido si $\\mu=0$ o $\\theta=0$?).' },
        { t: 'box', kind: 'exam', title: 'Lo que MÁS cae (prioriza si te falta tiempo)', html: '<b>1. Energía con roce</b> ($E_f-E_i=W_{nc}$): el rey, sale casi siempre.<br><b>2. Newton con poleas</b> (relación 2:1, el 4 en el denominador).<br><b>3. MAS</b> (hallar $\\omega$ y $x(t)$, a veces con polea o bloque encima).<br><b>4. Circular</b> (polares, cono, rizo).<br><b>5. Momentum/choques</b> (conservación + elástico/inelástico).<br>Con energía, poleas y MAS sólidos, ya estás sobre 5. 💪' },
        { t: 'box', kind: 'def', title: 'La regla de oro de la física', html: 'No se aprende leyendo, se aprende resolviendo. Por cada ejercicio de aquí, hazlo TÚ en papel antes de ver la solución. Equivocarte y corregir es exactamente cómo se fija. Tú puedes con esto. 💪' }
      ]
    }
  ],
  flashcards: [
    { q: 'Las 3 cosas que más caen en el Prueba 2', a: 'Energía con roce ($E_f-E_i=W_{nc}$), Newton con poleas (2:1), y MAS ($\\omega=\\sqrt{k/m}$).' },
    { q: 'Regla de oro #1 en la prueba', a: 'Siempre dibujar el DCL primero. Vale puntos y evita errores.' },
    { q: 'Máximo ángulo para que un bloque no deslice', a: '$\\tan\\theta_{max}=\\mu_s$ (de $mg\\sin\\theta=\\mu_s mg\\cos\\theta$).' },
    { q: 'n esferas en fila con restitución e: velocidad de la última', a: '$v_n=v_1\\left(\\frac{1+e}{2}\\right)^{n-1}$.' }
  ],
  quiz: [
    { type: 'comp', q: 'Si te queda poco tiempo de estudio, ¿qué priorizas?', opts: ['Solo momentum', 'Energía con roce, poleas y MAS', 'Solo el formulario', 'Solo circular'], answer: 1, explain: 'Energía, poleas y MAS son el grueso del Prueba 2.' },
    { type: 'vf', q: 'En un problema de desarrollo conviene dibujar el DCL antes de escribir ecuaciones.', opts: ['Verdadero', 'Falso'], answer: 0, explain: 'Verdadero: el DCL da puntos y ordena el problema.' },
    { type: 'alt', q: 'El máximo ángulo de un plano para que un bloque no deslice cumple:', opts: ['$\\sin\\theta=\\mu_s$', '$\\tan\\theta=\\mu_s$', '$\\cos\\theta=\\mu_s$', '$\\theta=\\mu_s$'], answer: 1, explain: 'De $mg\\sin\\theta=\\mu_s mg\\cos\\theta$ sale $\\tan\\theta=\\mu_s$.' }
  ]
});
/*END_UNITS*/
