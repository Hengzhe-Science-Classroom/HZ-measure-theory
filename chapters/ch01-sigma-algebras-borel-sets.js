window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch01',
    number: 1,
    title: 'Set Theory and the Architecture of Collections',
    subtitle: 'Algebras, Sigma-Algebras, and the Borel Sets',
    sections: [
        // ============================================================
        // Section 1: Review of Set Operations
        // ============================================================
        {
            id: 'set-operations',
            title: 'Review of Set Operations',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>From motivation to structure.</strong> In Chapter 0, we discovered that no "length" function can be defined consistently on <em>all</em> subsets of \\(\\mathbb{R}\\). The resolution is to restrict to a well-behaved collection of sets. But which collection? Before answering, we need fluency with set operations. This section reviews unions, intersections, complements, De Morgan's laws, and indexed families.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Review set operations, establish notation for indexed families, and prove De Morgan's laws and the distributive laws.</p>
                    <p><strong>Reference:</strong> Folland 0.A; Royden-Fitzpatrick 1.1; Stein-Shakarchi III Appendix.</p>
                </div>

                <h2>Starting from a Concrete Example</h2>

                <p>Roll a single die: \\(\\Omega = \\{1, 2, 3, 4, 5, 6\\}\\). Let \\(A = \\{2, 4, 6\\}\\) (even), \\(B = \\{1, 2, 3\\}\\) (at most 3). Then:</p>
                <ul>
                    <li>\\(A \\cup B = \\{1, 2, 3, 4, 6\\}\\), \\(A \\cap B = \\{2\\}\\)</li>
                    <li>\\(A^c = \\{1, 3, 5\\}\\), \\(A \\setminus B = \\{4, 6\\}\\)</li>
                    <li>\\(A \\triangle B = (A \\setminus B) \\cup (B \\setminus A) = \\{1, 3, 4, 6\\}\\) (symmetric difference)</li>
                </ul>

                <h2>The Basic Operations</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.1 (Set Operations)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a universal set and \\(A, B \\subseteq X\\).</p>
                        <ul>
                            <li><strong>Union:</strong> \\(A \\cup B = \\{x \\in X : x \\in A \\text{ or } x \\in B\\}\\)</li>
                            <li><strong>Intersection:</strong> \\(A \\cap B = \\{x \\in X : x \\in A \\text{ and } x \\in B\\}\\)</li>
                            <li><strong>Complement:</strong> \\(A^c = X \\setminus A = \\{x \\in X : x \\notin A\\}\\)</li>
                            <li><strong>Set difference:</strong> \\(A \\setminus B = A \\cap B^c\\)</li>
                            <li><strong>Symmetric difference:</strong> \\(A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)\\)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.2 (Intervals on the Real Line)</div>
                    <div class="env-body">
                        <p>\\([0,2] \\cup [1,3] = [0,3]\\), \\([0,2] \\cap [1,3] = [1,2]\\), \\([0,2] \\setminus [1,3] = [0,1)\\), \\([0,2] \\triangle [1,3] = [0,1) \\cup (2,3]\\). Union and intersection of intervals are intervals; set difference often produces unions of intervals.</p>
                    </div>
                </div>

                <h2>Indexed Families</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.3 (Indexed Unions and Intersections)</div>
                    <div class="env-body">
                        <p>Let \\(I\\) be an index set and \\(\\{A_i\\}_{i \\in I}\\) a family of subsets of \\(X\\).</p>
                        \\[\\bigcup_{i \\in I} A_i = \\{x \\in X : x \\in A_i \\text{ for some } i \\in I\\}, \\quad \\bigcap_{i \\in I} A_i = \\{x \\in X : x \\in A_i \\text{ for all } i \\in I\\}.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.4 (Nested Intervals)</div>
                    <div class="env-body">
                        <p>\\(A_n = (-1/n, 1/n)\\): \\(\\bigcap_{n=1}^{\\infty} A_n = \\{0\\}\\), \\(\\bigcup_{n=1}^{\\infty} A_n = (-1, 1)\\).</p>
                        <p>\\(B_n = [0, 1 - 1/n]\\) for \\(n \\geq 2\\): \\(\\bigcup_{n=2}^{\\infty} B_n = [0, 1)\\). This is neither open nor closed: countable unions of closed sets need not be closed.</p>
                    </div>
                </div>

                <h2>De Morgan's Laws</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.5 (De Morgan's Laws)</div>
                    <div class="env-body">
                        \\[\\left(\\bigcup_{i \\in I} A_i\\right)^c = \\bigcap_{i \\in I} A_i^c, \\qquad \\left(\\bigcap_{i \\in I} A_i\\right)^c = \\bigcup_{i \\in I} A_i^c.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>\\(x \\in (\\bigcup_i A_i)^c \\Leftrightarrow x \\notin \\bigcup_i A_i \\Leftrightarrow \\forall i,\\; x \\notin A_i \\Leftrightarrow \\forall i,\\; x \\in A_i^c \\Leftrightarrow x \\in \\bigcap_i A_i^c\\). The second law follows by applying the first to \\(\\{A_i^c\\}\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Complement Depends on Universal Set)</div>
                    <div class="env-body">
                        <p>\\((0,1)^c\\) in \\(\\mathbb{R}\\) is \\((-\\infty, 0] \\cup [1, \\infty)\\), but \\((0,1)^c\\) in \\([0,2]\\) is \\(\\{0\\} \\cup [1,2]\\). Always specify the ambient space.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 1.6 (Distributive Laws)</div>
                    <div class="env-body">
                        \\[A \\cap \\bigcup_{i} B_i = \\bigcup_{i} (A \\cap B_i), \\qquad A \\cup \\bigcap_{i} B_i = \\bigcap_{i} (A \\cup B_i).\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Symmetric Difference as a Group Operation)</div>
                    <div class="env-body">
                        <p>\\((\\mathcal{P}(X), \\triangle)\\) is an abelian group with identity \\(\\emptyset\\) and every element self-inverse. Together with \\(\\cap\\), \\((\\mathcal{P}(X), \\triangle, \\cap)\\) is a Boolean ring.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="set-ops-venn"></div>
            `,
            visualizations: [
                {
                    id: 'set-ops-venn',
                    title: 'Set Operations Visualizer',
                    description: 'Toggle different operations on sets A and B.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 300;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');
                        var currentOp = 'union';

                        var ops = ['union', 'intersection', 'A \\ B', 'symmetric diff', 'complement A'];
                        ops.forEach(function(name) {
                            var b = document.createElement('button');
                            b.style.cssText = 'padding:4px 10px;margin:2px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            b.textContent = name;
                            b.addEventListener('click', function() { currentOp = name; draw(); });
                            controls.appendChild(b);
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = '#0c0c20';
                            ctx.fillRect(0, 0, w, h);
                            var cxA = w / 2 - 50, cxB = w / 2 + 50, cy = h / 2, r = 75;

                            // Universal set box
                            ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 1;
                            ctx.strokeRect(w / 2 - 180, 25, 360, 250);
                            ctx.fillStyle = '#8b949e'; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.fillText('X', w / 2 - 174, 42);

                            // Highlight
                            ctx.save(); ctx.globalAlpha = 0.3;
                            if (currentOp === 'union') {
                                ctx.fillStyle = '#58a6ff';
                                ctx.beginPath(); ctx.arc(cxA, cy, r, 0, 2 * Math.PI); ctx.fill();
                                ctx.beginPath(); ctx.arc(cxB, cy, r, 0, 2 * Math.PI); ctx.fill();
                            } else if (currentOp === 'intersection') {
                                ctx.beginPath(); ctx.arc(cxA, cy, r, 0, 2 * Math.PI); ctx.clip();
                                ctx.fillStyle = '#58a6ff';
                                ctx.beginPath(); ctx.arc(cxB, cy, r, 0, 2 * Math.PI); ctx.fill();
                            } else if (currentOp === 'A \\ B') {
                                ctx.fillStyle = '#58a6ff';
                                ctx.beginPath(); ctx.arc(cxA, cy, r, 0, 2 * Math.PI); ctx.fill();
                                ctx.globalCompositeOperation = 'destination-out';
                                ctx.beginPath(); ctx.arc(cxB, cy, r, 0, 2 * Math.PI); ctx.fill();
                                ctx.globalCompositeOperation = 'source-over';
                            } else if (currentOp === 'symmetric diff') {
                                ctx.fillStyle = '#58a6ff';
                                ctx.beginPath(); ctx.arc(cxA, cy, r, 0, 2 * Math.PI); ctx.fill();
                                ctx.beginPath(); ctx.arc(cxB, cy, r, 0, 2 * Math.PI); ctx.fill();
                                ctx.globalCompositeOperation = 'destination-out';
                                ctx.save();
                                ctx.beginPath(); ctx.arc(cxA, cy, r, 0, 2 * Math.PI); ctx.clip();
                                ctx.beginPath(); ctx.arc(cxB, cy, r, 0, 2 * Math.PI); ctx.fill();
                                ctx.restore();
                                ctx.globalCompositeOperation = 'source-over';
                            } else if (currentOp === 'complement A') {
                                ctx.fillStyle = '#58a6ff';
                                ctx.fillRect(w / 2 - 180, 25, 360, 250);
                                ctx.globalCompositeOperation = 'destination-out';
                                ctx.beginPath(); ctx.arc(cxA, cy, r, 0, 2 * Math.PI); ctx.fill();
                                ctx.globalCompositeOperation = 'source-over';
                            }
                            ctx.restore();

                            // Outlines
                            ctx.strokeStyle = '#3fb950'; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.arc(cxA, cy, r, 0, 2 * Math.PI); ctx.stroke();
                            ctx.strokeStyle = '#f0883e';
                            ctx.beginPath(); ctx.arc(cxB, cy, r, 0, 2 * Math.PI); ctx.stroke();

                            // Labels
                            ctx.fillStyle = '#3fb950'; ctx.font = 'bold 15px -apple-system,sans-serif'; ctx.textAlign = 'center';
                            ctx.fillText('A', cxA - 42, cy);
                            ctx.fillStyle = '#f0883e'; ctx.fillText('B', cxB + 42, cy);
                            ctx.fillStyle = '#f0f6fc'; ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText(currentOp, w / 2, h - 8);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove the second De Morgan law directly: \\((\\bigcap_{i} A_i)^c = \\bigcup_{i} A_i^c\\).',
                    hint: 'Show both inclusions by chasing element membership.',
                    solution: '\\(x \\in (\\bigcap_i A_i)^c \\Leftrightarrow x \\notin \\bigcap_i A_i \\Leftrightarrow \\exists i: x \\notin A_i \\Leftrightarrow \\exists i: x \\in A_i^c \\Leftrightarrow x \\in \\bigcup_i A_i^c\\).'
                },
                {
                    question: 'Let \\(A_n = [1/n, 1]\\) for \\(n \\geq 1\\). Compute \\(\\bigcup_{n=1}^{\\infty} A_n\\) and \\(\\bigcap_{n=1}^{\\infty} A_n\\).',
                    hint: 'The union grows as \\(n \\to \\infty\\). The intersection is the smallest set.',
                    solution: '\\(\\bigcup A_n = (0, 1]\\) (every \\(x \\in (0,1]\\) lies in \\(A_n\\) for large \\(n\\), but \\(0 \\notin A_n\\) for any \\(n\\)). \\(\\bigcap A_n = \\{1\\}\\) since \\(A_1 = [1,1] = \\{1\\}\\).'
                },
                {
                    question: 'Show that \\(A \\triangle B = (A \\cup B) \\setminus (A \\cap B)\\) and that \\(\\triangle\\) is associative.',
                    hint: 'For associativity, use indicator functions: \\(\\mathbf{1}_{A \\triangle B} = \\mathbf{1}_A + \\mathbf{1}_B \\pmod{2}\\).',
                    solution: 'Expand: \\((A \\cup B) \\setminus (A \\cap B) = (A \\cup B) \\cap (A \\cap B)^c = (A \\cup B) \\cap (A^c \\cup B^c) = (A \\cap B^c) \\cup (B \\cap A^c) = A \\triangle B\\). Associativity: \\(\\mathbf{1}_{A \\triangle B} = \\mathbf{1}_A \\oplus \\mathbf{1}_B\\) where \\(\\oplus\\) is XOR (addition mod 2). Since \\(\\oplus\\) is associative, so is \\(\\triangle\\).'
                },
                {
                    question: 'Define \\(\\limsup_{n} A_n = \\bigcap_{n=1}^{\\infty} \\bigcup_{k=n}^{\\infty} A_k\\) and \\(\\liminf_{n} A_n = \\bigcup_{n=1}^{\\infty} \\bigcap_{k=n}^{\\infty} A_k\\). Show that \\(\\liminf A_n \\subseteq \\limsup A_n\\) and interpret both in terms of element membership.',
                    hint: '\\(x \\in \\limsup A_n\\) iff \\(x\\) belongs to infinitely many \\(A_n\\). \\(x \\in \\liminf A_n\\) iff \\(x\\) belongs to all but finitely many \\(A_n\\).',
                    solution: '\\(x \\in \\liminf A_n \\Leftrightarrow \\exists N: \\forall k \\geq N,\\, x \\in A_k \\Rightarrow \\forall n,\\, \\exists k \\geq n: x \\in A_k \\Leftrightarrow x \\in \\limsup A_n\\). The first says "eventually always in \\(A_n\\)," the second says "in \\(A_n\\) infinitely often." The former implies the latter.'
                }
            ]
        },

        // ============================================================
        // Section 2: Algebras (Fields) of Sets
        // ============================================================
        {
            id: 'algebras-of-sets',
            title: 'Algebras (Fields) of Sets',
            content: `
                <div class="bridge section-bridge">
                    <p>With set operations in hand, we ask: what collections of sets are well-behaved enough to serve as the domain of a measure? We start with <em>algebras</em>, which require closure only under <em>finite</em> operations, and discover why they are not quite enough.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define algebras of sets, give key examples, and see why finite closure is insufficient for measure theory.</p>
                    <p><strong>Reference:</strong> Folland 1.1; Royden-Fitzpatrick 2.1.</p>
                </div>

                <h2>A Concrete Example First</h2>

                <p>On \\(X = \\{1, 2, 3\\}\\), the collection \\(\\mathcal{A} = \\{\\emptyset, \\{1\\}, \\{2, 3\\}, X\\}\\) is closed under union, intersection, and complement: \\(\\{1\\} \\cup \\{2,3\\} = X \\in \\mathcal{A}\\), \\(\\{1\\}^c = \\{2,3\\} \\in \\mathcal{A}\\). This is an algebra.</p>

                <p>But \\(\\{\\emptyset, \\{1\\}, \\{2,3\\}, \\{2\\}, X\\}\\) is <strong>not</strong> an algebra: \\(\\{2\\}^c = \\{1,3\\}\\) is missing.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.7 (Algebra of Sets)</div>
                    <div class="env-body">
                        <p>A collection \\(\\mathcal{A} \\subseteq \\mathcal{P}(X)\\) is an <strong>algebra</strong> (or <strong>field</strong>) on \\(X\\) if:</p>
                        <ol>
                            <li>\\(X \\in \\mathcal{A}\\).</li>
                            <li>\\(A \\in \\mathcal{A} \\Rightarrow A^c \\in \\mathcal{A}\\).</li>
                            <li>\\(A, B \\in \\mathcal{A} \\Rightarrow A \\cup B \\in \\mathcal{A}\\).</li>
                        </ol>
                        <p>By De Morgan, this also gives closure under finite intersections. Also \\(\\emptyset = X^c \\in \\mathcal{A}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.8 (Key Examples)</div>
                    <div class="env-body">
                        <ol>
                            <li><strong>Trivial:</strong> \\(\\{\\emptyset, X\\}\\).</li>
                            <li><strong>Discrete:</strong> \\(\\mathcal{P}(X)\\).</li>
                            <li><strong>Finite-cofinite on \\(\\mathbb{N}\\):</strong> \\(\\mathcal{A} = \\{A \\subseteq \\mathbb{N} : A \\text{ finite or } A^c \\text{ finite}\\}\\). This is an algebra (check!).</li>
                            <li><strong>Interval algebra on \\(\\mathbb{R}\\):</strong> Finite unions of half-open intervals \\((a, b]\\), plus \\((-\\infty, b]\\), \\((a, \\infty)\\), \\(\\emptyset\\), \\(\\mathbb{R}\\). An algebra but not a sigma-algebra.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.9 (Generated Algebra)</div>
                    <div class="env-body">
                        <p>The <strong>algebra generated by</strong> \\(\\mathcal{C} \\subseteq \\mathcal{P}(X)\\) is \\(a(\\mathcal{C}) = \\bigcap\\{\\mathcal{A} : \\mathcal{A} \\supseteq \\mathcal{C},\\; \\mathcal{A} \\text{ an algebra}\\}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.10 (Generating an Algebra)</div>
                    <div class="env-body">
                        <p>On \\(X = \\{1, 2, 3, 4\\}\\), \\(\\mathcal{C} = \\{\\{1, 2\\}\\}\\) gives \\(a(\\mathcal{C}) = \\{\\emptyset, \\{1,2\\}, \\{3,4\\}, X\\}\\) (4 elements). But \\(\\mathcal{C} = \\{\\{1\\}, \\{2\\}\\}\\) gives \\(a(\\mathcal{C}) = \\mathcal{P}(X)\\) (16 elements).</p>
                    </div>
                </div>

                <h2>Why Algebras Are Not Enough</h2>

                <div class="env-block example">
                    <div class="env-title">Example 1.11 (Failure of Countable Closure)</div>
                    <div class="env-body">
                        <p>In the finite-cofinite algebra on \\(\\mathbb{N}\\), each \\(\\{2n\\}\\) is finite hence in \\(\\mathcal{A}\\). But \\(\\bigcup_{n=1}^{\\infty} \\{2n\\} = \\{2, 4, 6, \\ldots\\}\\) is neither finite nor cofinite, so it is not in \\(\\mathcal{A}\\). Countable additivity of measures requires countable closure.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Algebra vs. Sigma-Algebra)</div>
                    <div class="env-body">
                        <p>Every sigma-algebra is an algebra, but not conversely. On infinite sets, the gap is enormous. The finite-cofinite algebra on \\(\\mathbb{N}\\) is countable, but the sigma-algebra it generates is \\(\\mathcal{P}(\\mathbb{N})\\), which is uncountable.</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Show that every algebra is closed under finite intersections and set differences.',
                    hint: 'Use De Morgan: \\(A \\cap B = (A^c \\cup B^c)^c\\). For set difference: \\(A \\setminus B = A \\cap B^c\\).',
                    solution: '\\(A \\cap B = (A^c \\cup B^c)^c \\in \\mathcal{A}\\) since \\(\\mathcal{A}\\) is closed under complements and finite unions. \\(A \\setminus B = A \\cap B^c \\in \\mathcal{A}\\) by closure under complements and intersections.'
                },
                {
                    question: 'On a finite set \\(|X| = n\\), show every algebra has \\(2^k\\) elements for some \\(k \\leq n\\).',
                    hint: 'Atoms of the algebra partition \\(X\\). Each element of the algebra is a union of atoms.',
                    solution: 'For \\(x \\in X\\), let \\(B_x = \\bigcap\\{A \\in \\mathcal{A} : x \\in A\\}\\) (finite intersection). These partition \\(X\\) into \\(k\\) atoms. Every \\(A \\in \\mathcal{A}\\) is a union of atoms, and every union of atoms is in \\(\\mathcal{A}\\). So \\(|\\mathcal{A}| = 2^k\\).'
                },
                {
                    question: 'Verify that the interval algebra on \\(\\mathbb{R}\\) (finite unions of \\((a,b], (-\\infty, b], (a,\\infty), \\emptyset, \\mathbb{R}\\)) is an algebra. Why is it important for Lebesgue measure?',
                    hint: 'Check closure under complement and union. For Lebesgue measure, recall Caratheodory extension.',
                    solution: 'Complement: \\((a,b]^c = (-\\infty, a] \\cup (b, \\infty)\\), which is a union of allowed types. Finite unions are closed by definition. This algebra is important because we define the premeasure \\(\\mu_0((a,b]) = b - a\\) on it, then apply Caratheodory to extend to the generated sigma-algebra.'
                }
            ]
        },

        // ============================================================
        // Section 3: Sigma-Algebras
        // ============================================================
        {
            id: 'sigma-algebras',
            title: 'Sigma-Algebras',
            content: `
                <div class="bridge section-bridge">
                    <p>Algebras fail at countable operations. Sigma-algebras fix this, providing the "right" domain for measures. This is the central definition of the chapter.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define sigma-algebras, give fundamental examples, and prove the existence of generated sigma-algebras.</p>
                    <p><strong>Reference:</strong> Folland 1.1; Royden-Fitzpatrick 2.1; Stein-Shakarchi III.1.</p>
                </div>

                <h2>Motivation</h2>

                <p>If \\(\\mu\\) is a measure on an algebra \\(\\mathcal{A}\\), we want \\(\\mu(\\bigcup_{n=1}^{\\infty} A_n)\\) to be defined for pairwise disjoint \\(A_n \\in \\mathcal{A}\\). This requires \\(\\bigcup A_n \\in \\mathcal{A}\\). Upgrading from finite to countable closure gives us sigma-algebras.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.12 (Sigma-Algebra)</div>
                    <div class="env-body">
                        <p>A collection \\(\\Sigma \\subseteq \\mathcal{P}(X)\\) is a <strong>\\(\\sigma\\)-algebra</strong> on \\(X\\) if:</p>
                        <ol>
                            <li>\\(X \\in \\Sigma\\).</li>
                            <li>\\(A \\in \\Sigma \\Rightarrow A^c \\in \\Sigma\\).</li>
                            <li>\\(A_1, A_2, \\ldots \\in \\Sigma \\Rightarrow \\bigcup_{n=1}^{\\infty} A_n \\in \\Sigma\\).</li>
                        </ol>
                        <p>The pair \\((X, \\Sigma)\\) is a <strong>measurable space</strong>.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Automatic Consequences)</div>
                    <div class="env-body">
                        <p>A sigma-algebra is automatically closed under countable intersections (De Morgan), set differences, and contains \\(\\emptyset\\). The only upgrade from "algebra" is: "finite unions" becomes "countable unions."</p>
                    </div>
                </div>

                <h2>Fundamental Examples</h2>

                <div class="env-block example">
                    <div class="env-title">Example 1.13 (Four Standard Examples)</div>
                    <div class="env-body">
                        <ol>
                            <li><strong>Trivial:</strong> \\(\\{\\emptyset, X\\}\\). A function is measurable w.r.t. this iff it is constant.</li>
                            <li><strong>Discrete:</strong> \\(\\mathcal{P}(X)\\). Every subset measurable.</li>
                            <li><strong>Co-countable on uncountable \\(X\\):</strong> \\(\\Sigma = \\{A : A \\text{ countable or } A^c \\text{ countable}\\}\\).</li>
                            <li><strong>Borel \\(\\mathcal{B}(\\mathbb{R})\\):</strong> Generated by open sets. The subject of Section 4.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Verification (Co-countable is a sigma-algebra)</div>
                    <div class="env-body">
                        <p>(1) \\(X^c = \\emptyset\\) is countable, so \\(X \\in \\Sigma\\). (2) Immediate from the symmetric definition. (3) Let \\(A_n \\in \\Sigma\\). If all \\(A_n\\) are countable, \\(\\bigcup A_n\\) is countable. If some \\(A_k\\) is co-countable, then \\((\\bigcup A_n)^c \\subseteq A_k^c\\) is countable.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Uncountable Unions Are Too Strong)</div>
                    <div class="env-body">
                        <p>We require only <em>countable</em> unions. If singletons are in \\(\\Sigma\\) and \\(\\Sigma\\) is closed under <em>arbitrary</em> unions, then every subset is in \\(\\Sigma\\), forcing \\(\\Sigma = \\mathcal{P}(X)\\).</p>
                    </div>
                </div>

                <h2>Generated Sigma-Algebras</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.14 (Existence of Generated Sigma-Algebra)</div>
                    <div class="env-body">
                        <p>For any \\(\\mathcal{C} \\subseteq \\mathcal{P}(X)\\), there exists a unique smallest sigma-algebra containing \\(\\mathcal{C}\\), denoted \\(\\sigma(\\mathcal{C})\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>\\(\\sigma(\\mathcal{C}) = \\bigcap\\{\\Sigma : \\Sigma \\supseteq \\mathcal{C},\\; \\Sigma \\text{ a sigma-algebra}\\}\\). Non-empty since \\(\\mathcal{P}(X)\\) qualifies. Verify the intersection is a sigma-algebra: (1) \\(X \\in \\Sigma\\) for all \\(\\Sigma\\) in the family, so \\(X \\in \\sigma(\\mathcal{C})\\). (2) If \\(A\\) is in every \\(\\Sigma\\), so is \\(A^c\\). (3) If each \\(A_n\\) is in every \\(\\Sigma\\), so is \\(\\bigcup A_n\\). Minimality: every sigma-algebra containing \\(\\mathcal{C}\\) appears in the intersection.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Generated Sigma-Algebras Are Implicit)</div>
                    <div class="env-body">
                        <p>This intersection proof gives existence but no explicit description of elements. For most generators, you cannot list all elements of \\(\\sigma(\\mathcal{C})\\). This is why the monotone class and Dynkin theorems (Section 6) are essential: they prove properties of \\(\\sigma(\\mathcal{C})\\) without enumerating its elements.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.15 (Small Generated Sigma-Algebras)</div>
                    <div class="env-body">
                        <p>On \\(\\{1,2,3\\}\\), \\(\\sigma(\\{\\{1\\}\\}) = \\{\\emptyset, \\{1\\}, \\{2,3\\}, X\\}\\) (4 elements).</p>
                        <p>On \\(\\mathbb{R}\\), \\(\\sigma(\\{(a, \\infty) : a \\in \\mathbb{R}\\}) = \\mathcal{B}(\\mathbb{R})\\) (proved in Section 4).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sigma-gen-builder"></div>
            `,
            visualizations: [
                {
                    id: 'sigma-gen-builder',
                    title: 'Sigma-Algebra Generator',
                    description: 'Pick a generating set on {1,2,3,4} and see the generated sigma-algebra.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 340;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var X = [1, 2, 3, 4];
                        var generators = [[1, 2]];

                        var presets = [
                            { label: '{1,2}', gen: [[1,2]] },
                            { label: '{1}', gen: [[1]] },
                            { label: '{1},{2}', gen: [[1],[2]] },
                            { label: '{1},{3}', gen: [[1],[3]] },
                            { label: '{1,2},{2,3}', gen: [[1,2],[2,3]] }
                        ];

                        presets.forEach(function(p) {
                            var b = document.createElement('button');
                            b.style.cssText = 'padding:4px 10px;margin:2px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            b.textContent = p.label;
                            b.addEventListener('click', function() { generators = p.gen; draw(); });
                            controls.appendChild(b);
                        });

                        function sk(arr) { return arr.slice().sort().join(','); }
                        function compl(arr) { return X.filter(function(x) { return arr.indexOf(x) < 0; }); }
                        function uni(a, b) { var s = a.slice(); b.forEach(function(x) { if (s.indexOf(x) < 0) s.push(x); }); return s.sort(); }
                        function inter(a, b) { return a.filter(function(x) { return b.indexOf(x) >= 0; }).sort(); }

                        function genSA(gens) {
                            var sets = {};
                            sets[sk([])] = [];
                            sets[sk(X)] = X.slice();
                            gens.forEach(function(g) { sets[sk(g)] = g.slice(); });
                            var changed = true, safety = 0;
                            while (changed && safety < 100) {
                                changed = false; safety++;
                                var all = Object.keys(sets).map(function(k) { return sets[k]; });
                                all.forEach(function(s) {
                                    var c = compl(s), k = sk(c);
                                    if (!sets[k]) { sets[k] = c; changed = true; }
                                });
                                for (var i = 0; i < all.length; i++) {
                                    for (var j = i; j < all.length; j++) {
                                        var u = uni(all[i], all[j]), ku = sk(u);
                                        if (!sets[ku]) { sets[ku] = u; changed = true; }
                                        var v = inter(all[i], all[j]), kv = sk(v);
                                        if (!sets[kv]) { sets[kv] = v; changed = true; }
                                    }
                                }
                            }
                            var res = Object.keys(sets).map(function(k) { return sets[k]; });
                            res.sort(function(a, b) { return a.length - b.length || a.join('').localeCompare(b.join('')); });
                            return res;
                        }

                        function fmt(arr) {
                            if (arr.length === 0) return '\u2205';
                            if (arr.length === X.length) return 'X';
                            return '{' + arr.join(',') + '}';
                        }

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = '#0c0c20'; ctx.fillRect(0, 0, w, h);
                            var sa = genSA(generators);
                            ctx.fillStyle = '#f0f6fc'; ctx.font = 'bold 13px -apple-system,sans-serif'; ctx.textAlign = 'left';
                            ctx.fillText('X = {1,2,3,4}', 12, 22);
                            ctx.fillStyle = '#3fb950';
                            ctx.fillText('Generators: ' + generators.map(fmt).join(', '), 12, 44);
                            ctx.fillStyle = '#58a6ff';
                            ctx.fillText('\u03C3(C) has ' + sa.length + ' elements:', 12, 66);

                            ctx.font = '12px -apple-system,sans-serif';
                            var cols = Math.min(4, Math.ceil(Math.sqrt(sa.length)));
                            var colW = (w - 24) / cols;
                            sa.forEach(function(s, idx) {
                                var col = idx % cols, row = Math.floor(idx / cols);
                                var isGen = generators.some(function(g) { return sk(g) === sk(s); });
                                ctx.fillStyle = isGen ? '#3fb950' : '#c9d1d9';
                                ctx.fillText(fmt(s), 12 + col * colW, 90 + row * 26);
                            });
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that the co-countable sigma-algebra on \\(\\mathbb{R}\\) is strictly contained in \\(\\mathcal{B}(\\mathbb{R})\\).',
                    hint: '\\((0,1)\\) is Borel but neither countable nor co-countable.',
                    solution: 'Inclusion: every countable set is a countable union of closed singletons (hence Borel), and every co-countable set is a complement of a Borel set. Strictness: \\((0,1) \\in \\mathcal{B}(\\mathbb{R})\\) but \\((0,1)\\) is uncountable with uncountable complement, so \\((0,1) \\notin \\Sigma_{cc}\\).'
                },
                {
                    question: 'Let \\(f: X \\to Y\\) and \\(\\mathcal{N}\\) a sigma-algebra on \\(Y\\). Prove \\(f^{-1}(\\mathcal{N}) = \\{f^{-1}(B) : B \\in \\mathcal{N}\\}\\) is a sigma-algebra on \\(X\\).',
                    hint: 'Use \\(f^{-1}(B^c) = (f^{-1}(B))^c\\) and \\(f^{-1}(\\bigcup B_n) = \\bigcup f^{-1}(B_n)\\).',
                    solution: '(1) \\(X = f^{-1}(Y) \\in f^{-1}(\\mathcal{N})\\). (2) \\((f^{-1}(B))^c = f^{-1}(B^c) \\in f^{-1}(\\mathcal{N})\\). (3) \\(\\bigcup f^{-1}(B_n) = f^{-1}(\\bigcup B_n) \\in f^{-1}(\\mathcal{N})\\).'
                },
                {
                    question: 'Prove: a sigma-algebra is either finite or has cardinality \\(\\geq 2^{\\aleph_0}\\). No sigma-algebra is countably infinite.',
                    hint: 'If \\(\\Sigma\\) is infinite, extract infinitely many pairwise disjoint non-empty sets.',
                    solution: 'Suppose \\(|\\Sigma| = \\aleph_0\\). Pick distinct \\(A_1, A_2, \\ldots \\in \\Sigma\\). Define \\(B_n = A_n \\setminus \\bigcup_{k&lt;n} A_k \\in \\Sigma\\). The non-empty \\(B_n\\) are disjoint. If only finitely many are non-empty, the \\(A_n\\) generate a finite sigma-algebra, contradicting \\(|\\Sigma| = \\aleph_0\\). So relabel to get infinitely many disjoint non-empty \\(B_n\\). Each \\(S \\subseteq \\mathbb{N}\\) gives a distinct \\(\\bigcup_{n \\in S} B_n \\in \\Sigma\\), so \\(|\\Sigma| \\geq 2^{\\aleph_0}\\). Contradiction.'
                },
                {
                    question: 'Show that \\(\\sigma(\\mathcal{C}_1 \\cup \\mathcal{C}_2) = \\sigma(\\sigma(\\mathcal{C}_1) \\cup \\sigma(\\mathcal{C}_2))\\) for any collections \\(\\mathcal{C}_1, \\mathcal{C}_2 \\subseteq \\mathcal{P}(X)\\). In words: generating in one step equals generating each piece and then combining.',
                    hint: 'Show mutual inclusion. One direction is immediate since \\(\\mathcal{C}_i \\subseteq \\sigma(\\mathcal{C}_i)\\).',
                    solution: 'Since \\(\\mathcal{C}_i \\subseteq \\sigma(\\mathcal{C}_i)\\), we have \\(\\mathcal{C}_1 \\cup \\mathcal{C}_2 \\subseteq \\sigma(\\mathcal{C}_1) \\cup \\sigma(\\mathcal{C}_2)\\), so \\(\\sigma(\\mathcal{C}_1 \\cup \\mathcal{C}_2) \\subseteq \\sigma(\\sigma(\\mathcal{C}_1) \\cup \\sigma(\\mathcal{C}_2))\\). Conversely, \\(\\sigma(\\mathcal{C}_1 \\cup \\mathcal{C}_2) \\supseteq \\mathcal{C}_i\\), so \\(\\sigma(\\mathcal{C}_1 \\cup \\mathcal{C}_2) \\supseteq \\sigma(\\mathcal{C}_i)\\) by minimality, hence \\(\\sigma(\\mathcal{C}_1 \\cup \\mathcal{C}_2) \\supseteq \\sigma(\\mathcal{C}_1) \\cup \\sigma(\\mathcal{C}_2)\\), so \\(\\sigma(\\mathcal{C}_1 \\cup \\mathcal{C}_2) \\supseteq \\sigma(\\sigma(\\mathcal{C}_1) \\cup \\sigma(\\mathcal{C}_2))\\).'
                }
            ]
        },

        // ============================================================
        // Section 4: The Borel Sigma-Algebra on R
        // ============================================================
        {
            id: 'borel-sigma-algebra',
            title: 'The Borel Sigma-Algebra on R',
            content: `
                <div class="bridge section-bridge">
                    <p>We now identify the most important sigma-algebra in analysis: the Borel sigma-algebra on \\(\\mathbb{R}\\), generated by the open sets. We show that many different generating collections yield the same sigma-algebra and briefly discuss the Borel hierarchy.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define \\(\\mathcal{B}(\\mathbb{R})\\), prove that several natural generating collections produce it, and introduce the Borel hierarchy.</p>
                    <p><strong>Reference:</strong> Folland 1.2; Royden-Fitzpatrick 2.3; Stein-Shakarchi III.1.</p>
                </div>

                <h2>Starting Example: Which Sets Are Borel?</h2>

                <p>Consider these subsets of \\(\\mathbb{R}\\):</p>
                <ul>
                    <li>\\((0,1)\\) is open, hence Borel.</li>
                    <li>\\([0,1]\\) is closed (complement of an open set), hence Borel.</li>
                    <li>\\(\\{0\\} = \\bigcap_{n=1}^{\\infty} (-1/n, 1/n)\\) is a countable intersection of open sets (a \\(G_\\delta\\) set), hence Borel.</li>
                    <li>\\(\\mathbb{Q} = \\bigcup_{q \\in \\mathbb{Q}} \\{q\\}\\) is a countable union of closed sets (an \\(F_\\sigma\\) set), hence Borel.</li>
                    <li>The Cantor set is closed, hence Borel.</li>
                </ul>
                <p>All "naturally occurring" subsets of \\(\\mathbb{R}\\) are Borel. Non-Borel sets require the axiom of choice to construct.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.16 (Borel Sigma-Algebra)</div>
                    <div class="env-body">
                        <p>The <strong>Borel sigma-algebra</strong> on \\(\\mathbb{R}\\) is \\(\\mathcal{B}(\\mathbb{R}) = \\sigma(\\mathcal{O})\\), where \\(\\mathcal{O}\\) is the collection of all open subsets of \\(\\mathbb{R}\\). Elements of \\(\\mathcal{B}(\\mathbb{R})\\) are called <strong>Borel sets</strong>.</p>
                        <p>More generally, for any topological space \\((X, \\mathcal{T})\\), define \\(\\mathcal{B}(X) = \\sigma(\\mathcal{T})\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.17 (Equivalent Generators of \\(\\mathcal{B}(\\mathbb{R})\\))</div>
                    <div class="env-body">
                        <p>The following collections all generate \\(\\mathcal{B}(\\mathbb{R})\\):</p>
                        <ol>
                            <li>Open sets \\(\\mathcal{O}\\)</li>
                            <li>Closed sets \\(\\mathcal{C}\\)</li>
                            <li>Open intervals \\(\\{(a,b) : a &lt; b\\}\\)</li>
                            <li>Closed intervals \\(\\{[a,b] : a \\leq b\\}\\)</li>
                            <li>Half-open intervals \\(\\{(a,b] : a &lt; b\\}\\)</li>
                            <li>Rays \\(\\{(a, \\infty) : a \\in \\mathbb{R}\\}\\)</li>
                            <li>Rays \\(\\{(-\\infty, a] : a \\in \\mathbb{R}\\}\\)</li>
                            <li>Rays \\(\\{(-\\infty, a) : a \\in \\mathbb{R}\\}\\)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>We show a cycle of inclusions. (1)\\(\\Rightarrow\\)(3): Every open set in \\(\\mathbb{R}\\) is a countable union of open intervals (use rational endpoints). So \\(\\sigma(\\text{open intervals}) \\supseteq \\sigma(\\mathcal{O})\\). Conversely, open intervals are open sets, so \\(\\sigma(\\text{open intervals}) \\subseteq \\sigma(\\mathcal{O})\\).</p>
                        <p>(3)\\(\\Rightarrow\\)(6): \\((a, \\infty) = \\bigcup_{n=1}^{\\infty} (a, a+n)\\), so rays are in \\(\\sigma(\\text{open intervals})\\). Conversely, \\((a,b) = (a, \\infty) \\cap (-\\infty, b) = (a, \\infty) \\cap (b, \\infty)^c\\).</p>
                        <p>(6)\\(\\Leftrightarrow\\)(7): \\((-\\infty, a] = (a, \\infty)^c\\).</p>
                        <p>(6)\\(\\Rightarrow\\)(5): \\((a,b] = (a, \\infty) \\cap (-\\infty, b]\\). Conversely, \\((a, \\infty) = \\bigcup_n (a, a+n]\\).</p>
                        <p>(1)\\(\\Leftrightarrow\\)(2): Closed sets are complements of open sets, and vice versa.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Why So Many Generators?)</div>
                    <div class="env-body">
                        <p>The key fact is that open sets in \\(\\mathbb{R}\\) are countable unions of basic intervals (second countability of \\(\\mathbb{R}\\)). This means any "reasonable" collection of intervals generates the same sigma-algebra. On non-second-countable spaces, different generators can produce different sigma-algebras.</p>
                    </div>
                </div>

                <h2>The Borel Hierarchy</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.18 (Borel Hierarchy)</div>
                    <div class="env-body">
                        <p>Define the following classes of Borel sets:</p>
                        <ul>
                            <li>\\(G_\\delta\\) = countable intersections of open sets (e.g., irrationals in \\([0,1]\\))</li>
                            <li>\\(F_\\sigma\\) = countable unions of closed sets (e.g., rationals \\(\\mathbb{Q}\\))</li>
                            <li>\\(G_{\\delta\\sigma}\\) = countable unions of \\(G_\\delta\\) sets</li>
                            <li>\\(F_{\\sigma\\delta}\\) = countable intersections of \\(F_\\sigma\\) sets</li>
                        </ul>
                        <p>This continues transfinitely. The full Borel hierarchy has \\(\\omega_1\\) levels and exhausts \\(\\mathcal{B}(\\mathbb{R})\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.19 (Sets at Various Levels)</div>
                    <div class="env-body">
                        <p>Open sets and closed sets are at level 1. \\(\\mathbb{Q} = \\bigcup_{q \\in \\mathbb{Q}} \\{q\\}\\) is \\(F_\\sigma\\) but not \\(G_\\delta\\) (by the Baire category theorem). The irrationals \\(\\mathbb{R} \\setminus \\mathbb{Q}\\) are \\(G_\\delta\\) but not \\(F_\\sigma\\). At each level, there exist sets not belonging to any lower level.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Borel \\(\\neq\\) Lebesgue Measurable)</div>
                    <div class="env-body">
                        <p>Every Borel set is Lebesgue measurable, but not conversely. There exist Lebesgue-measurable sets that are not Borel. We have \\(|\\mathcal{B}(\\mathbb{R})| = \\mathfrak{c}\\) (cardinality of \\(\\mathbb{R}\\)) but the Lebesgue sigma-algebra has cardinality \\(2^{\\mathfrak{c}}\\). See Section 5 for more on cardinality.</p>
                    </div>
                </div>

                <h2>Extension to \\(\\mathbb{R}^n\\)</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.20 (Borel Sets in \\(\\mathbb{R}^n\\))</div>
                    <div class="env-body">
                        <p>\\(\\mathcal{B}(\\mathbb{R}^n) = \\sigma(\\text{open sets in } \\mathbb{R}^n)\\). Equivalently, \\(\\mathcal{B}(\\mathbb{R}^n) = \\sigma(\\{(a_1,b_1) \\times \\cdots \\times (a_n,b_n)\\})\\) (generated by open rectangles). In fact, \\(\\mathcal{B}(\\mathbb{R}^n) = \\mathcal{B}(\\mathbb{R}) \\otimes \\cdots \\otimes \\mathcal{B}(\\mathbb{R})\\) (product sigma-algebra, see Chapter 12).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="borel-hierarchy-tree"></div>
            `,
            visualizations: [
                {
                    id: 'borel-hierarchy-tree',
                    title: 'Borel Hierarchy Tree',
                    description: 'Visualize the levels of the Borel hierarchy with example sets at each level.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 380;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = '#0c0c20'; ctx.fillRect(0, 0, w, h);

                            var levels = [
                                { y: 340, items: [
                                    { label: 'Open sets', color: '#3fb950', ex: '(a,b), unions of intervals' },
                                    { label: 'Closed sets', color: '#f0883e', ex: '[a,b], {point}, Cantor set' }
                                ]},
                                { y: 260, items: [
                                    { label: 'G\u03B4', color: '#3fb9a0', ex: 'Irrationals, single points' },
                                    { label: 'F\u03C3', color: '#d29922', ex: 'Rationals Q, countable sets' }
                                ]},
                                { y: 180, items: [
                                    { label: 'G\u03B4\u03C3', color: '#bc8cff', ex: 'Unions of G\u03B4 sets' },
                                    { label: 'F\u03C3\u03B4', color: '#f778ba', ex: 'Intersections of F\u03C3 sets' }
                                ]},
                                { y: 100, items: [
                                    { label: '...continues transfinitely...', color: '#8b949e', ex: '\u03C9\u2081 levels' }
                                ]},
                                { y: 40, items: [
                                    { label: 'B(R) = all Borel sets', color: '#58a6ff', ex: '|B(R)| = c' }
                                ]}
                            ];

                            // Draw connecting lines
                            ctx.strokeStyle = '#4a4a7a'; ctx.lineWidth = 1;
                            for (var i = 0; i < levels.length - 1; i++) {
                                var fromY = levels[i].y - 15;
                                var toY = levels[i + 1].y + 15;
                                levels[i].items.forEach(function(item, idx) {
                                    var fromX = w / 2 + (idx - (levels[i].items.length - 1) / 2) * 200;
                                    levels[i + 1].items.forEach(function(tItem, tidx) {
                                        var toX = w / 2 + (tidx - (levels[i + 1].items.length - 1) / 2) * 200;
                                        ctx.beginPath(); ctx.moveTo(fromX, fromY); ctx.lineTo(toX, toY); ctx.stroke();
                                    });
                                });
                            }

                            // Draw nodes
                            levels.forEach(function(level) {
                                level.items.forEach(function(item, idx) {
                                    var x = w / 2 + (idx - (level.items.length - 1) / 2) * 200;
                                    // Node box
                                    ctx.fillStyle = item.color + '33';
                                    var tw = ctx.measureText(item.label).width || 100;
                                    var bw = Math.max(tw + 20, 120);
                                    ctx.fillRect(x - bw / 2, level.y - 14, bw, 28);
                                    ctx.strokeStyle = item.color; ctx.lineWidth = 1.5;
                                    ctx.strokeRect(x - bw / 2, level.y - 14, bw, 28);
                                    // Label
                                    ctx.fillStyle = item.color; ctx.font = 'bold 12px -apple-system,sans-serif';
                                    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                    ctx.fillText(item.label, x, level.y);
                                    // Example
                                    ctx.fillStyle = '#8b949e'; ctx.font = '10px -apple-system,sans-serif';
                                    ctx.fillText(item.ex, x, level.y + 22);
                                });
                            });
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that \\(\\mathbb{Q}\\) is an \\(F_\\sigma\\) set but not a \\(G_\\delta\\) set. (The second part uses the Baire category theorem.)',
                    hint: 'For \\(F_\\sigma\\): write \\(\\mathbb{Q} = \\bigcup_q \\{q\\}\\). For not \\(G_\\delta\\): if \\(\\mathbb{Q} = \\bigcap U_n\\) with \\(U_n\\) open and dense, intersect with the irrationals to get a contradiction with Baire.',
                    solution: '\\(F_\\sigma\\): \\(\\mathbb{Q} = \\bigcup_{q \\in \\mathbb{Q}} \\{q\\}\\) is a countable union of closed sets. Not \\(G_\\delta\\): Suppose \\(\\mathbb{Q} = \\bigcap_{n=1}^{\\infty} U_n\\) with \\(U_n\\) open. Each \\(U_n \\supseteq \\mathbb{Q}\\) is dense in \\(\\mathbb{R}\\). Also \\(\\mathbb{R} \\setminus \\{q\\}\\) is open and dense for each \\(q\\). By Baire, \\(\\bigcap_n U_n \\cap \\bigcap_q (\\mathbb{R} \\setminus \\{q\\}) \\neq \\emptyset\\). But this set equals \\(\\mathbb{Q} \\cap (\\mathbb{R} \\setminus \\mathbb{Q}) = \\emptyset\\), contradiction.'
                },
                {
                    question: 'Show that \\(\\sigma(\\{(a, \\infty) : a \\in \\mathbb{Q}\\}) = \\mathcal{B}(\\mathbb{R})\\). That is, rational endpoints suffice.',
                    hint: '\\((a, \\infty) = \\bigcup_n (a + 1/n, \\infty)\\) does not help (it gives the same set). Instead, show \\((a, \\infty)\\) for irrational \\(a\\) can be written using rational rays.',
                    solution: 'We show every real ray \\((a, \\infty)\\) is in \\(\\sigma(\\{(q, \\infty) : q \\in \\mathbb{Q}\\})\\). Claim: \\((a, \\infty) = \\bigcup_{q \\in \\mathbb{Q},\\, q > a} (q, \\infty)\\). Proof: if \\(x > a\\), by density of \\(\\mathbb{Q}\\) there exists \\(q \\in \\mathbb{Q}\\) with \\(a < q < x\\), so \\(x \\in (q, \\infty)\\). Conversely, each \\((q, \\infty) \\subseteq (a, \\infty)\\) when \\(q > a\\). This is a countable union (\\(\\mathbb{Q}\\) is countable), so \\((a, \\infty) \\in \\sigma(\\{(q, \\infty) : q \\in \\mathbb{Q}\\})\\). Since real rays generate \\(\\mathcal{B}(\\mathbb{R})\\), rational rays do too.'
                },
                {
                    question: 'Let \\(f: \\mathbb{R} \\to \\mathbb{R}\\) be continuous. Show that \\(f\\) is Borel measurable (i.e., \\(f^{-1}(B) \\in \\mathcal{B}(\\mathbb{R})\\) for all \\(B \\in \\mathcal{B}(\\mathbb{R})\\)).',
                    hint: 'It suffices to check on generators. The preimage of an open set under a continuous function is open.',
                    solution: 'It suffices to show \\(f^{-1}(U) \\in \\mathcal{B}(\\mathbb{R})\\) for every open \\(U\\). By continuity, \\(f^{-1}(U)\\) is open. Every open set is Borel, so \\(f^{-1}(U) \\in \\mathcal{B}(\\mathbb{R})\\). Since open sets generate \\(\\mathcal{B}(\\mathbb{R})\\), the collection \\(\\{B : f^{-1}(B) \\in \\mathcal{B}(\\mathbb{R})\\}\\) is a sigma-algebra containing all open sets, hence contains \\(\\mathcal{B}(\\mathbb{R})\\).'
                },
                {
                    question: 'Show that every monotone function \\(f: \\mathbb{R} \\to \\mathbb{R}\\) is Borel measurable. (A monotone function need not be continuous.)',
                    hint: 'For monotone increasing \\(f\\), what does \\(f^{-1}((a, \\infty))\\) look like? It is an interval (possibly half-open or empty).',
                    solution: 'Assume \\(f\\) is non-decreasing (the non-increasing case is similar). Then \\(f^{-1}((a, \\infty)) = \\{x : f(x) > a\\}\\). Since \\(f\\) is non-decreasing, if \\(f(x_0) > a\\) then \\(f(x) > a\\) for all \\(x > x_0\\). So \\(f^{-1}((a, \\infty))\\) is either \\(\\emptyset\\), \\(\\mathbb{R}\\), or an interval of the form \\((c, \\infty)\\) or \\([c, \\infty)\\) for some \\(c\\). In all cases it is Borel. Since rays \\(\\{(a, \\infty)\\}\\) generate \\(\\mathcal{B}(\\mathbb{R})\\), \\(f\\) is Borel measurable.'
                }
            ]
        },

        // ============================================================
        // Section 5: Atoms, Generators, and Cardinality
        // ============================================================
        {
            id: 'atoms-generators-cardinality',
            title: 'Atoms, Generators, and Cardinality',
            content: `
                <div class="bridge section-bridge">
                    <p>How "big" is a sigma-algebra? On a finite set, the answer is determined by atoms. On \\(\\mathbb{R}\\), the answer involves subtle cardinality arguments. This section explores the internal structure of sigma-algebras.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define atoms, study cardinality of \\(\\mathcal{B}(\\mathbb{R})\\), and preview product sigma-algebras.</p>
                    <p><strong>Reference:</strong> Folland 1.2; Royden-Fitzpatrick 2.4.</p>
                </div>

                <h2>Starting Example: Atoms on a Finite Set</h2>

                <p>On \\(X = \\{1,2,3,4\\}\\), the sigma-algebra \\(\\Sigma = \\{\\emptyset, \\{1,2\\}, \\{3,4\\}, X\\}\\) has two "indivisible" pieces: \\(\\{1,2\\}\\) and \\(\\{3,4\\}\\). Within \\(\\Sigma\\), we cannot distinguish 1 from 2, or 3 from 4. These indivisible pieces are the atoms.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.21 (Atom)</div>
                    <div class="env-body">
                        <p>Let \\(\\Sigma\\) be a sigma-algebra on \\(X\\). A set \\(A \\in \\Sigma\\) is an <strong>atom</strong> if \\(A \\neq \\emptyset\\) and for every \\(B \\in \\Sigma\\) with \\(B \\subseteq A\\), either \\(B = \\emptyset\\) or \\(B = A\\).</p>
                        <p>A sigma-algebra is <strong>atomic</strong> if every non-empty \\(B \\in \\Sigma\\) contains an atom, and <strong>non-atomic</strong> (or <strong>atomless</strong>) if it has no atoms.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.22</div>
                    <div class="env-body">
                        <ul>
                            <li>\\(\\mathcal{P}(X)\\): every singleton \\(\\{x\\}\\) is an atom.</li>
                            <li>\\(\\{\\emptyset, X\\}\\): \\(X\\) itself is the unique atom.</li>
                            <li>\\(\\mathcal{B}(\\mathbb{R})\\): every singleton \\(\\{x\\}\\) is an atom (since \\(\\{x\\}\\) is closed, hence Borel, and contains no proper non-empty Borel subset).</li>
                            <li>Co-countable on \\(\\mathbb{R}\\): the singletons \\(\\{x\\}\\) are atoms (each is countable, hence in \\(\\Sigma\\), and contains no proper non-empty countable subset). In fact, singletons are the <em>only</em> atoms: every countable set with \\(\\geq 2\\) elements contains a proper non-empty singleton, and every co-countable set contains singletons.</li>
                            <li><strong>Non-atomic example:</strong> The sigma-algebra \\(\\Sigma = \\{A \\subseteq [0,1] : A \\text{ or } A^c \\text{ is countable}\\}\\) restricted to the equivalence relation that identifies points in the same orbit under translation by \\(\\mathbb{Q}\\) can yield atomless structures. A more concrete example: on \\(([0,1], \\mathcal{B}([0,1]))\\), the sigma-algebra itself has atoms (singletons), but the <em>measure space</em> \\(([0,1], \\mathcal{B}([0,1]), \\lambda)\\) is non-atomic in the measure-theoretic sense: every set of positive Lebesgue measure contains a proper subset of positive measure.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 1.23 (Structure of Finite Sigma-Algebras)</div>
                    <div class="env-body">
                        <p>Every sigma-algebra on a finite set \\(X\\) is determined by its atoms, which partition \\(X\\). If there are \\(k\\) atoms, then \\(|\\Sigma| = 2^k\\).</p>
                    </div>
                </div>

                <h2>Cardinality of \\(\\mathcal{B}(\\mathbb{R})\\)</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.24 (Cardinality of the Borel Sigma-Algebra)</div>
                    <div class="env-body">
                        <p>\\(|\\mathcal{B}(\\mathbb{R})| = \\mathfrak{c} = |\\mathbb{R}| = 2^{\\aleph_0}\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p><strong>Lower bound:</strong> \\(\\mathcal{B}(\\mathbb{R})\\) contains all singletons \\(\\{x\\}\\), so \\(|\\mathcal{B}(\\mathbb{R})| \\geq |\\mathbb{R}| = \\mathfrak{c}\\).</p>
                        <p><strong>Upper bound:</strong> \\(\\mathcal{B}(\\mathbb{R})\\) is generated by open intervals with rational endpoints, a countable collection. By a transfinite induction argument (iterating complement and countable union operations \\(\\omega_1\\) times, starting from a countable generating set), one shows that only \\(\\mathfrak{c}\\) sets can be produced.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Borel vs. Lebesgue)</div>
                    <div class="env-body">
                        <p>The Lebesgue sigma-algebra on \\(\\mathbb{R}\\) has cardinality \\(2^{\\mathfrak{c}}\\), which is strictly larger than \\(\\mathfrak{c}\\). The "extra" sets come from subsets of Lebesgue-null sets (e.g., subsets of the Cantor set). Since the Cantor set has measure zero and cardinality \\(\\mathfrak{c}\\), all \\(2^{\\mathfrak{c}}\\) of its subsets are Lebesgue measurable (with measure zero), but most are not Borel.</p>
                    </div>
                </div>

                <h2>Countable Generators</h2>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 1.25 (Countable Generation)</div>
                    <div class="env-body">
                        <p>\\(\\mathcal{B}(\\mathbb{R}^n)\\) is <strong>countably generated</strong>: it equals \\(\\sigma(\\mathcal{C})\\) for a countable collection \\(\\mathcal{C}\\). For example, \\(\\mathcal{C} = \\{(a_1, b_1) \\times \\cdots \\times (a_n, b_n) : a_i, b_i \\in \\mathbb{Q}\\}\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Product Sigma-Algebras Preview)</div>
                    <div class="env-body">
                        <p>Given measurable spaces \\((X, \\mathcal{M})\\) and \\((Y, \\mathcal{N})\\), the product sigma-algebra \\(\\mathcal{M} \\otimes \\mathcal{N}\\) on \\(X \\times Y\\) is generated by "measurable rectangles" \\(\\{A \\times B : A \\in \\mathcal{M}, B \\in \\mathcal{N}\\}\\). For the Borel case: \\(\\mathcal{B}(\\mathbb{R}) \\otimes \\mathcal{B}(\\mathbb{R}) = \\mathcal{B}(\\mathbb{R}^2)\\). We will study this in detail in Chapter 12.</p>
                    </div>
                </div>
            `,
            visualizations: [],
            exercises: [
                {
                    question: 'Find all atoms of the sigma-algebra \\(\\Sigma = \\{\\emptyset, \\{1\\}, \\{2,3\\}, \\{4,5,6\\}, \\{1,2,3\\}, \\{1,4,5,6\\}, \\{2,3,4,5,6\\}, X\\}\\) on \\(X = \\{1,2,3,4,5,6\\}\\).',
                    hint: 'An atom is a minimal non-empty element. Check each non-empty set for proper non-empty subsets within \\(\\Sigma\\).',
                    solution: 'The atoms are \\(\\{1\\}\\), \\(\\{2,3\\}\\), and \\(\\{4,5,6\\}\\). Check: \\(\\{1\\}\\) has no proper non-empty subset in \\(\\Sigma\\). \\(\\{2,3\\}\\) has no proper non-empty subset in \\(\\Sigma\\). \\(\\{4,5,6\\}\\) has no proper non-empty subset in \\(\\Sigma\\). There are \\(k=3\\) atoms and \\(|\\Sigma| = 2^3 = 8\\). \\(\\checkmark\\)'
                },
                {
                    question: 'Show that \\(|\\mathcal{B}(\\mathbb{R})| = \\mathfrak{c}\\) implies there exist Lebesgue-measurable sets that are not Borel.',
                    hint: 'Count: the Lebesgue sigma-algebra has cardinality \\(2^{\\mathfrak{c}} > \\mathfrak{c}\\). Use subsets of the Cantor set.',
                    solution: 'The Cantor set \\(C\\) has \\(|C| = \\mathfrak{c}\\) and Lebesgue measure 0. Every subset of a measure-zero set is Lebesgue measurable (by completeness). So there are \\(2^{\\mathfrak{c}}\\) Lebesgue-measurable subsets of \\(C\\). But \\(|\\mathcal{B}(\\mathbb{R})| = \\mathfrak{c} < 2^{\\mathfrak{c}}\\). So most subsets of \\(C\\) are Lebesgue measurable but not Borel.'
                },
                {
                    question: 'Let \\(\\Sigma\\) be a sigma-algebra on \\(X\\) with finitely many atoms \\(A_1, \\ldots, A_k\\). Show that if \\(\\mu\\) and \\(\\nu\\) are two measures on \\(\\Sigma\\) with \\(\\mu(A_i) = \\nu(A_i)\\) for all \\(i\\), then \\(\\mu = \\nu\\).',
                    hint: 'Every set in \\(\\Sigma\\) is a disjoint union of atoms.',
                    solution: 'Every \\(B \\in \\Sigma\\) can be written \\(B = \\bigsqcup_{i \\in S} A_i\\) for some \\(S \\subseteq \\{1,\\ldots,k\\}\\). By finite additivity, \\(\\mu(B) = \\sum_{i \\in S} \\mu(A_i) = \\sum_{i \\in S} \\nu(A_i) = \\nu(B)\\).'
                }
            ]
        },

        // ============================================================
        // Section 6: Monotone Classes and Dynkin Pi-Lambda Theorem
        // ============================================================
        {
            id: 'monotone-dynkin',
            title: "Monotone Classes and Dynkin's Pi-Lambda Theorem",
            content: `
                <div class="bridge section-bridge">
                    <p>Generated sigma-algebras are defined by intersection but we cannot list their elements. How do we prove that a property holds for all Borel sets? The monotone class theorem and Dynkin's pi-lambda theorem provide the answer: verify the property on a simple generating collection, then propagate it to the entire sigma-algebra.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove the monotone class theorem and Dynkin's pi-lambda theorem. Apply them to prove uniqueness of measures.</p>
                    <p><strong>Reference:</strong> Folland 1.3; Royden-Fitzpatrick 2.5; Billingsley, <em>Probability and Measure</em>, Section 3.</p>
                </div>

                <h2>The Problem These Tools Solve</h2>

                <p><strong>Scenario:</strong> We want to show that two measures \\(\\mu\\) and \\(\\nu\\) on \\(\\mathcal{B}(\\mathbb{R})\\) are equal. We know \\(\\mu((a,b]) = \\nu((a,b])\\) for all \\(a &lt; b\\). Can we conclude \\(\\mu = \\nu\\) on all of \\(\\mathcal{B}(\\mathbb{R})\\)?</p>

                <p>The collection \\(\\{B : \\mu(B) = \\nu(B)\\}\\) contains all half-open intervals, but is it a sigma-algebra? Not obviously: countable unions of sets where \\(\\mu = \\nu\\) need not satisfy \\(\\mu = \\nu\\) (unless the union is disjoint). The pi-lambda theorem handles exactly this difficulty.</p>

                <h2>Pi-Systems and Lambda-Systems</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.26 (Pi-System)</div>
                    <div class="env-body">
                        <p>A collection \\(\\mathcal{P} \\subseteq \\mathcal{P}(X)\\) is a <strong>\\(\\pi\\)-system</strong> if it is closed under finite intersections: \\(A, B \\in \\mathcal{P} \\Rightarrow A \\cap B \\in \\mathcal{P}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.27</div>
                    <div class="env-body">
                        <ul>
                            <li>\\(\\{(a,b] : a &lt; b\\}\\) is a pi-system: \\((a,b] \\cap (c,d] = (\\max(a,c), \\min(b,d)]\\) (empty if \\(\\max(a,c) \\geq \\min(b,d)\\), but \\(\\emptyset\\) need not be in a pi-system).</li>
                            <li>Open sets of \\(\\mathbb{R}\\) form a pi-system (finite intersection of open sets is open).</li>
                            <li>Any algebra is a pi-system (closed under all finite operations).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.28 (Lambda-System / Dynkin System)</div>
                    <div class="env-body">
                        <p>A collection \\(\\mathcal{L} \\subseteq \\mathcal{P}(X)\\) is a <strong>\\(\\lambda\\)-system</strong> (or <strong>Dynkin system</strong>) if:</p>
                        <ol>
                            <li>\\(X \\in \\mathcal{L}\\).</li>
                            <li>If \\(A, B \\in \\mathcal{L}\\) and \\(A \\subseteq B\\), then \\(B \\setminus A \\in \\mathcal{L}\\). (Closure under proper differences.)</li>
                            <li>If \\(A_1 \\subseteq A_2 \\subseteq \\cdots\\) with each \\(A_n \\in \\mathcal{L}\\), then \\(\\bigcup_{n=1}^{\\infty} A_n \\in \\mathcal{L}\\). (Closure under increasing limits.)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Lambda-System vs. Sigma-Algebra)</div>
                    <div class="env-body">
                        <p>A sigma-algebra is always a lambda-system. The converse fails: a lambda-system need not be closed under general unions. But a lambda-system that is also a pi-system <em>is</em> a sigma-algebra (this is the key insight).</p>
                    </div>
                </div>

                <div class="env-block lemma">
                    <div class="env-title">Lemma 1.29 (Pi + Lambda = Sigma)</div>
                    <div class="env-body">
                        <p>If \\(\\mathcal{L}\\) is both a \\(\\pi\\)-system and a \\(\\lambda\\)-system, then \\(\\mathcal{L}\\) is a \\(\\sigma\\)-algebra.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>We verify the sigma-algebra axioms. (1) \\(X \\in \\mathcal{L}\\). (2) \\(A^c = X \\setminus A \\in \\mathcal{L}\\) by the proper difference property (since \\(A \\subseteq X\\)). (3) For countable unions, first note that \\(A \\cup B = (A^c \\cap B^c)^c\\), and since \\(\\mathcal{L}\\) is a pi-system, \\(A^c \\cap B^c \\in \\mathcal{L}\\), so \\(A \\cup B \\in \\mathcal{L}\\). For a countable union \\(\\bigcup A_n\\), define \\(B_n = A_1 \\cup \\cdots \\cup A_n \\in \\mathcal{L}\\). Then \\(B_1 \\subseteq B_2 \\subseteq \\cdots\\) and \\(\\bigcup A_n = \\bigcup B_n \\in \\mathcal{L}\\) by the increasing limits property.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>Dynkin's Pi-Lambda Theorem</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.30 (Dynkin's \\(\\pi\\)-\\(\\lambda\\) Theorem)</div>
                    <div class="env-body">
                        <p>If \\(\\mathcal{P}\\) is a \\(\\pi\\)-system and \\(\\mathcal{L}\\) is a \\(\\lambda\\)-system with \\(\\mathcal{P} \\subseteq \\mathcal{L}\\), then \\(\\sigma(\\mathcal{P}) \\subseteq \\mathcal{L}\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(\\lambda(\\mathcal{P})\\) be the smallest lambda-system containing \\(\\mathcal{P}\\) (exists by the same intersection argument as for sigma-algebras). We show \\(\\lambda(\\mathcal{P})\\) is a pi-system; by Lemma 1.29, it is then a sigma-algebra, and since \\(\\sigma(\\mathcal{P})\\) is the smallest sigma-algebra containing \\(\\mathcal{P}\\), we get \\(\\sigma(\\mathcal{P}) \\subseteq \\lambda(\\mathcal{P}) \\subseteq \\mathcal{L}\\).</p>
                        <p>To show \\(\\lambda(\\mathcal{P})\\) is a pi-system, define for each \\(A \\subseteq X\\):</p>
                        \\[\\mathcal{G}_A = \\{B \\in \\lambda(\\mathcal{P}) : A \\cap B \\in \\lambda(\\mathcal{P})\\}.\\]
                        <p><strong>Step 1:</strong> For \\(A \\in \\mathcal{P}\\), show \\(\\mathcal{G}_A\\) is a lambda-system containing \\(\\mathcal{P}\\).</p>
                        <p>\\(X \\in \\mathcal{G}_A\\) since \\(A \\cap X = A \\in \\lambda(\\mathcal{P})\\). If \\(B \\subseteq C\\) are in \\(\\mathcal{G}_A\\), then \\(A \\cap (C \\setminus B) = (A \\cap C) \\setminus (A \\cap B) \\in \\lambda(\\mathcal{P})\\) (proper difference). If \\(B_n \\nearrow\\), then \\(A \\cap \\bigcup B_n = \\bigcup (A \\cap B_n) \\in \\lambda(\\mathcal{P})\\) (increasing union). So \\(\\mathcal{G}_A\\) is a lambda-system. Since \\(\\mathcal{P}\\) is a pi-system, \\(B \\in \\mathcal{P} \\Rightarrow A \\cap B \\in \\mathcal{P} \\subseteq \\lambda(\\mathcal{P})\\), so \\(\\mathcal{P} \\subseteq \\mathcal{G}_A\\).</p>
                        <p>By minimality, \\(\\lambda(\\mathcal{P}) \\subseteq \\mathcal{G}_A\\). This means: for all \\(A \\in \\mathcal{P}\\) and \\(B \\in \\lambda(\\mathcal{P})\\), \\(A \\cap B \\in \\lambda(\\mathcal{P})\\).</p>
                        <p><strong>Step 2:</strong> Now for \\(A \\in \\lambda(\\mathcal{P})\\), \\(\\mathcal{G}_A\\) is still a lambda-system (same argument). By Step 1, \\(\\mathcal{P} \\subseteq \\mathcal{G}_A\\) (for any \\(B \\in \\mathcal{P}\\), \\(A \\cap B \\in \\lambda(\\mathcal{P})\\) by Step 1 with roles swapped). So \\(\\lambda(\\mathcal{P}) \\subseteq \\mathcal{G}_A\\).</p>
                        <p>This gives: for all \\(A, B \\in \\lambda(\\mathcal{P})\\), \\(A \\cap B \\in \\lambda(\\mathcal{P})\\). So \\(\\lambda(\\mathcal{P})\\) is a pi-system.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>The Monotone Class Theorem</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.31 (Monotone Class)</div>
                    <div class="env-body">
                        <p>A collection \\(\\mathcal{M} \\subseteq \\mathcal{P}(X)\\) is a <strong>monotone class</strong> if it is closed under increasing and decreasing limits: if \\(A_n \\nearrow A\\) or \\(A_n \\searrow A\\) with all \\(A_n \\in \\mathcal{M}\\), then \\(A \\in \\mathcal{M}\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.32 (Monotone Class Theorem)</div>
                    <div class="env-body">
                        <p>If \\(\\mathcal{A}\\) is an algebra of sets and \\(\\mathcal{M}\\) is a monotone class with \\(\\mathcal{A} \\subseteq \\mathcal{M}\\), then \\(\\sigma(\\mathcal{A}) \\subseteq \\mathcal{M}\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>An algebra is a pi-system, and a monotone class containing an algebra is a lambda-system (exercise). Apply Dynkin's theorem.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>Application: Uniqueness of Measures</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.33 (Uniqueness on Pi-Systems)</div>
                    <div class="env-body">
                        <p>Let \\(\\mu\\) and \\(\\nu\\) be measures on \\(\\sigma(\\mathcal{P})\\), where \\(\\mathcal{P}\\) is a pi-system. Suppose \\(\\mu = \\nu\\) on \\(\\mathcal{P}\\) and there exist \\(E_n \\in \\mathcal{P}\\) with \\(E_n \\nearrow X\\) and \\(\\mu(E_n) &lt; \\infty\\). Then \\(\\mu = \\nu\\) on \\(\\sigma(\\mathcal{P})\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>Fix \\(E_n\\). Define \\(\\mathcal{L}_n = \\{A \\in \\sigma(\\mathcal{P}) : \\mu(A \\cap E_n) = \\nu(A \\cap E_n)\\}\\). Verify \\(\\mathcal{L}_n\\) is a lambda-system containing \\(\\mathcal{P}\\). By Dynkin, \\(\\mathcal{L}_n \\supseteq \\sigma(\\mathcal{P})\\). Taking \\(n \\to \\infty\\) with continuity from below gives \\(\\mu = \\nu\\) on \\(\\sigma(\\mathcal{P})\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.34 (Lebesgue Measure Is Unique)</div>
                    <div class="env-body">
                        <p>\\(\\mathcal{P} = \\{(a,b] : a &lt; b\\}\\) is a pi-system generating \\(\\mathcal{B}(\\mathbb{R})\\). Take \\(E_n = (-n, n]\\). If \\(\\mu\\) and \\(\\nu\\) agree on all half-open intervals and are sigma-finite, then \\(\\mu = \\nu\\) on \\(\\mathcal{B}(\\mathbb{R})\\). In particular, Lebesgue measure is the <em>unique</em> translation-invariant measure on \\(\\mathcal{B}(\\mathbb{R})\\) with \\(\\mu((0,1]) = 1\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Sigma-Finiteness Is Essential)</div>
                    <div class="env-body">
                        <p>Without sigma-finiteness, uniqueness can fail. On \\((\\{0, 1\\}, \\mathcal{P}(\\{0,1\\}))\\), the pi-system \\(\\{\\{0\\}\\}\\) generates the full power set. Define \\(\\mu(\\{0\\}) = \\nu(\\{0\\}) = 1\\) but \\(\\mu(\\{1\\}) = 2\\), \\(\\nu(\\{1\\}) = 3\\). These agree on the pi-system but not on \\(\\sigma(\\mathcal{P})\\). The problem: there is no sequence \\(E_n \\in \\mathcal{P}\\) with \\(E_n \\nearrow X\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="pi-lambda-closure"></div>
            `,
            visualizations: [
                {
                    id: 'pi-lambda-closure',
                    title: 'Pi-Lambda Closure Visualizer',
                    description: 'Start with a pi-system and watch the lambda-closure grow to become a sigma-algebra.',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth;
                        canvas.height = 360;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');
                        var step = 0;

                        var steps = [
                            { label: 'Start: \u03C0-system P', sets: ['{1,2}', '{2,3}', '{2}'], color: '#3fb950', note: 'Closed under intersection: {1,2}\u2229{2,3}={2} \u2713' },
                            { label: 'Step 1: Add X, proper diffs', sets: ['{1,2}', '{2,3}', '{2}', 'X={1,2,3,4}', '\u2205', '{3,4}', '{1,4}', '{1,3,4}', '{2,4}'], color: '#58a6ff', note: 'X\\{1,2}={3,4}, X\\{2,3}={1,4}, X\\{2}={1,3,4}, ...' },
                            { label: 'Step 2: More intersections', sets: ['{1,2}','{2,3}','{2}','X','\u2205','{3,4}','{1,4}','{1,3,4}','{2,4}','{4}','{1}','{3}'], color: '#bc8cff', note: '{3,4}\u2229{1,4}={4}, {1,4}\u2229{1,2}={1}, ...' },
                            { label: 'Step 3: Saturated = \u03C3(P)', sets: ['\u2205','{1}','{2}','{3}','{4}','{1,2}','{1,3}','{1,4}','{2,3}','{2,4}','{3,4}','{1,2,3}','{1,2,4}','{1,3,4}','{2,3,4}','X'], color: '#f0883e', note: '|\u03C3(P)| = 2\u2074 = 16 = P(X). The pi-system {1,2},{2,3} separates all points.' }
                        ];

                        VizEngine.createButton(controls, 'Next Step', function() {
                            if (step < steps.length - 1) { step++; draw(); }
                        });
                        VizEngine.createButton(controls, 'Reset', function() {
                            step = 0; draw();
                        });

                        function draw() {
                            var w = canvas.width, h = canvas.height;
                            ctx.fillStyle = '#0c0c20'; ctx.fillRect(0, 0, w, h);
                            var s = steps[step];

                            ctx.fillStyle = s.color; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.fillText(s.label, 12, 25);

                            ctx.fillStyle = '#c9d1d9'; ctx.font = '12px -apple-system,sans-serif';
                            var cols = 4, colW = (w - 24) / cols;
                            s.sets.forEach(function(set, idx) {
                                var col = idx % cols, row = Math.floor(idx / cols);
                                ctx.fillText(set, 12 + col * colW, 55 + row * 24);
                            });

                            var noteY = 55 + Math.ceil(s.sets.length / cols) * 24 + 15;
                            ctx.fillStyle = '#8b949e'; ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText(s.note, 12, noteY);

                            // Progress bar
                            var barY = h - 30;
                            ctx.fillStyle = '#1a1a40';
                            ctx.fillRect(12, barY, w - 24, 12);
                            ctx.fillStyle = s.color;
                            ctx.fillRect(12, barY, (w - 24) * ((step + 1) / steps.length), 12);
                            ctx.fillStyle = '#c9d1d9'; ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Step ' + (step + 1) + ' / ' + steps.length + ' \u2014 ' + s.sets.length + ' sets', w / 2, barY - 6);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(\\mu, \\nu\\) be finite measures on \\((X, \\Sigma)\\) with \\(\\mu(X) = \\nu(X)\\). Let \\(\\mathcal{P}\\) be a pi-system with \\(\\sigma(\\mathcal{P}) = \\Sigma\\). Show that if \\(\\mu = \\nu\\) on \\(\\mathcal{P}\\), then \\(\\mu = \\nu\\) on \\(\\Sigma\\).',
                    hint: 'Show \\(\\mathcal{L} = \\{A \\in \\Sigma : \\mu(A) = \\nu(A)\\}\\) is a lambda-system. Use \\(\\mu(X) = \\nu(X)\\) for proper differences.',
                    solution: '\\(\\mathcal{L} = \\{A : \\mu(A) = \\nu(A)\\}\\). (1) \\(X \\in \\mathcal{L}\\) by hypothesis. (2) If \\(A \\subseteq B\\) and \\(A, B \\in \\mathcal{L}\\), then \\(\\mu(B \\setminus A) = \\mu(B) - \\mu(A) = \\nu(B) - \\nu(A) = \\nu(B \\setminus A)\\). (3) If \\(A_n \\nearrow A\\) with each \\(A_n \\in \\mathcal{L}\\), then \\(\\mu(A) = \\lim \\mu(A_n) = \\lim \\nu(A_n) = \\nu(A)\\). So \\(\\mathcal{L}\\) is a lambda-system containing \\(\\mathcal{P}\\). By Dynkin, \\(\\sigma(\\mathcal{P}) = \\Sigma \\subseteq \\mathcal{L}\\).'
                },
                {
                    question: "Give an example showing that the pi-system hypothesis in Dynkin's theorem cannot be dropped (i.e., a collection \\(\\mathcal{C}\\) that is not a pi-system, a lambda-system \\(\\mathcal{L} \\supseteq \\mathcal{C}\\), and \\(\\sigma(\\mathcal{C}) \\not\\subseteq \\mathcal{L}\\)).",
                    hint: 'Take \\(X = \\{1,2,3,4\\}\\). Find \\(\\mathcal{C}\\) not closed under intersection such that the lambda-system it generates is not a sigma-algebra.',
                    solution: 'Let \\(X = \\{1,2,3,4\\}\\), \\(\\mathcal{C} = \\{\\{1,2\\}, \\{2,3\\}\\}\\). Note \\(\\{1,2\\} \\cap \\{2,3\\} = \\{2\\} \\notin \\mathcal{C}\\), so \\(\\mathcal{C}\\) is not a pi-system. The lambda-system \\(\\lambda(\\mathcal{C})\\) contains \\(X, \\emptyset, \\{1,2\\}, \\{3,4\\}, \\{2,3\\}, \\{1,4\\}\\) but need not contain \\(\\{2\\} = \\{1,2\\} \\cap \\{2,3\\}\\). Indeed \\(\\mathcal{L} = \\{\\emptyset, \\{1,2\\}, \\{3,4\\}, \\{2,3\\}, \\{1,4\\}, \\{1,2,3,4\\}\\}\\) is a lambda-system (check!) containing \\(\\mathcal{C}\\), but \\(\\sigma(\\mathcal{C}) = \\mathcal{P}(X)\\) has 16 elements while \\(\\mathcal{L}\\) has only 6.'
                },
                {
                    question: 'Use the monotone class theorem to show: if \\(\\mu\\) is a finite measure on \\(\\mathcal{B}(\\mathbb{R})\\) and \\(\\mu((a,b]) = b - a\\) for all \\(0 \\leq a &lt; b \\leq 1\\), then \\(\\mu([0,1]) = 1\\) and \\(\\mu\\) agrees with Lebesgue measure on \\(\\mathcal{B}([0,1])\\).',
                    hint: 'The half-open intervals in \\([0,1]\\) generate a pi-system (in fact an algebra). Apply Theorem 1.33.',
                    solution: 'The collection of finite disjoint unions of half-open intervals in \\([0,1]\\) is an algebra \\(\\mathcal{A}\\). \\(\\mu\\) and Lebesgue measure \\(\\lambda\\) agree on \\(\\mathcal{A}\\) by finite additivity. \\(\\mathcal{A}\\) is a pi-system with \\(\\sigma(\\mathcal{A}) = \\mathcal{B}([0,1])\\). Since \\(\\mu([0,1]) = \\lambda([0,1]) = 1 < \\infty\\), Theorem 1.33 gives \\(\\mu = \\lambda\\) on \\(\\mathcal{B}([0,1])\\).'
                },
                {
                    question: 'Show that a monotone class containing an algebra is a lambda-system. (This is the step needed to derive the monotone class theorem from Dynkin.)',
                    hint: 'Check the three lambda-system axioms. Use the algebra properties for (1) and (2), and the increasing-limit property of the monotone class for (3).',
                    solution: 'Let \\(\\mathcal{A} \\subseteq \\mathcal{M}\\) with \\(\\mathcal{A}\\) an algebra and \\(\\mathcal{M}\\) a monotone class. (1) \\(X \\in \\mathcal{A} \\subseteq \\mathcal{M}\\). (2) If \\(A \\subseteq B\\) with \\(A, B \\in \\mathcal{M}\\), we need \\(B \\setminus A \\in \\mathcal{M}\\). This does not follow from the monotone class property alone, so we actually work within \\(\\mathcal{M}\\) after showing it is closed under proper differences. For the standard proof: since \\(\\mathcal{A}\\) is an algebra (hence a pi-system), Dynkin gives \\(\\sigma(\\mathcal{A}) \\subseteq \\lambda(\\mathcal{A})\\). Since \\(\\mathcal{A}\\) is an algebra, \\(\\lambda(\\mathcal{A}) \\subseteq m(\\mathcal{A})\\) (the smallest monotone class containing \\(\\mathcal{A}\\)). Then \\(\\sigma(\\mathcal{A}) \\subseteq m(\\mathcal{A}) \\subseteq \\mathcal{M}\\). Alternatively, one proves the monotone class theorem directly by showing \\(m(\\mathcal{A})\\) is an algebra when \\(\\mathcal{A}\\) is, using a double-bootstrapping argument similar to the Dynkin proof.'
                }
            ]
        }
    ]
});
